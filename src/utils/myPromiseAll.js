Promise.myAll = function (promiseList){
    const resultMap = {}
    const promiseLength = promiseList.length
    return new Promise((resolve,reject)=>{
        promiseList.forEach((item,i)=>{
            item.then((res)=>{
                resultMap[i] = res
                if(Object.keys(resultMap).length === promiseLength){
                    const result = new Array(promiseLength)
                    Object.entries(resultMap).forEach((resList)=>{
                        result[resList[0]] = resList[1]
                    })
                    resolve(result)
                }
            }).catch((error)=>{
                reject(error)
            })
        })
    })
}


const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise1');
        }, 3000);
    });
};
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise2');
        }, 2000);
    });
};
const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise3');
        }, 1000);
    });
};
const promise4 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise4');
        }, 4000);
    });
};

Promise.myAll([promise1(),promise2(),promise3(),promise4()]).then((res)=>{
    console.log("dx---res",res)
}).catch((error)=>{
    console.log("dx---error",error)
})