const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


function readJSON() {
    try {
        const data = fs.readFileSync('outputMap.json','utf-8');
        const jsonData = JSON.parse(data);
        return jsonData;
    } catch (err) {
        console.error('出错:', err);
    }
}

function hasNoSpace(str) {
    const regex = /^\S*$/;
    return regex.test(str);
}

function checkOneLevel(oneLevelList,target){
    const error = []
    const targetList = target.split('_')
    const matchOneLevelList = oneLevelList.filter((i)=>{
        return  i.split('_')[0] === targetList[0]
    })
    if( targetList.length !== 4|| matchOneLevelList.length===0){
        error.push('第一级命名不正确')
    }
    return {
        error,
        matchOneLevelList
    }
}
function checkOtherLevel({matchOneLevelList,checkRulesMap,data}){
    const errors =[]
    matchOneLevelList.forEach((i)=>{
        const targetList = checkRulesMap[i]
        const targetRule =  targetList.filter((j)=>data.twoLevel === j.twoLevel)
        if(!targetRule.length){
            errors.push(`第2层命名不符合规则`)
        }
        if(isNaN(data.threeLevel)) errors.push(`第3层命名不符合规则`)
        console.log('data[3]',data.threeLevel)
        // 非mp4格式需要校验
        if( data.fourLevel.split('.')[1]!=='mp4' ){
            const fourLevelList = targetRule[0].fourLevel
            if(!fourLevelList.includes(data.fourLevel)){
                errors.push(`第4层文件命名不正确`)
            }
        }

    })
    return errors

}

function toCsv(data){


// // 假设这是要转换为CSV的数组
//     const data = [
//         ['John', 'Doe', 'john@example.com'],
//         ['Jane', 'Smith', 'jane@example.com']
//     ];

    const csvWriter = createCsvWriter({
        path: 'outputCheck-1.csv',
        header: [
            {id: 'oneLevel', title: '一层'},
            {id: 'twoLevel', title: '二层'},
            {id: 'threeLevel', title: '三层'},
            {id: 'fourLevel', title: '四层'},
            {id: 'errors', title: '错误'},

        ]
    });

    csvWriter.writeRecords(data)
        .then(() => {
            console.log('CSV file has been written successfully');
        })
        .catch((err) => {
            console.log('Error writing CSV file:', err);
        });
}

function test(){

    const checkRulesMap = readJSON()
    const oneLevelList = Object.keys(checkRulesMap)
    const results = [];

    fs.createReadStream('ProjectCheck.csv')
        .pipe(csv())
        .on('data', (data) => {
            const errors =[]
        //     判断是否有空格
            Object.values(data).forEach((i,index)=>{
                if(!hasNoSpace(i)){
                    errors.push(`第${index+1}层有空格`)
                }
            })
            results.push({...data,errors})
            if(errors.length) return

        //     一级一级对比，最后一级为mp4不需要对比
        //     一层
           const checkOneLevelRes =  checkOneLevel(oneLevelList,data.oneLevel)
            if(checkOneLevelRes.error.length){
                errors.push(...checkOneLevelRes.error)
                results.push({...data,errors})
                return
            }

            //其余层
           const matchOneLevelList =  checkOneLevelRes.matchOneLevelList

          const otherErrors =  checkOtherLevel({matchOneLevelList,checkRulesMap,data})
            results.push({...data,errors:[...errors,...otherErrors]})
        }).on('end', () => {
            console.log(results);
        toCsv(results)
        });

    // console.log("dx---checkRulesMap",checkRulesMap)


}





test()



// function main(data){
//     const checkRulesMap = readJSON()
//     const oneLevelList = Object.keys(checkRulesMap)
//     const errors =[]
//     //     判断是否有空格
//     Object.values(data).forEach((i,index)=>{
//         if(!hasNoSpace(i)){
//             errors.push(`第${index+1}层有空格`)
//         }
//     })
//     if(errors.length) return {
//         ...data,
//         errors
//     }
//
//     //     一级一级对比，最后一级为mp4不需要对比
//     //     一层
//     const checkOneLevelRes =  checkOneLevel(oneLevelList,data.oneLevel)
//     if(checkOneLevelRes.error.length){
//         errors.push(...checkOneLevelRes.error)
//
//         return {
//             ...data,
//             errors,
//         }
//     }
//
//     //其余层
//     const matchOneLevelList =  checkOneLevelRes.matchOneLevelList
//
//     const otherErrors =  checkOtherLevel({matchOneLevelList,checkRulesMap,data})
//     return {
//         ...data,
//         errors:[...errors,...otherErrors]
//     }
// }