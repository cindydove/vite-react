const XLSX = require('xlsx');
const fs = require('fs');

function convertXLSXToJSON(filePath) {

  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  let oneLevel = ""
  const oneLevelList =[]
  // // 假设你想要第一列的数据转换为 JSON
  const columnData = data.map(item =>{
    if(item.onelevel){
      oneLevel = item.onelevel
    }
    return {
      oneLevel: oneLevel ? oneLevel: oneLevel.trim(),
      twoLevel:item.twoLevel ? item.twoLevel.trim():"",
      threeLevel:item.threeLevel ,
      fourLevel:item.fourLevel ? item.fourLevel.split('\n').map(i=>i.trim()) : [],
    }
  })

const resMap = columnData.reduce((res,item)=>{
    if(!res[item.oneLevel]){
      res[item.oneLevel] = [{
            ...item
      }]
    }else{
      res[item.oneLevel]= [...res[item.oneLevel],{
        ...item
      }]
    }
    console.log("dx----item.oneLevel",item.oneLevel,!!res[item.oneLevel])
    return res

  },{})

  // return columnData;

  return resMap
}

const filePath = './层级规则.xlsx';
const jsonData = convertXLSXToJSON(filePath);
fs.writeFileSync('outputMap.json', JSON.stringify(jsonData, null, 2));
console.log(jsonData);