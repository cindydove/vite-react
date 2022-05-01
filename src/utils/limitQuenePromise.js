function fetchApi(time, index) {
    return new Promise((resolve, reject) => {
        console.log(`执行第${index}个`);
        setTimeout(() => {
            resolve(`完成第${index}个---${time}`);
        }, time);
    });
}
const fetchArr = [3000, 2000, 30, 40, 50, 60, 70, 80, 90, 100];
function limitQueue(limit,fetchArr){
    let index = 0
    let fina = 0
    const res = []

    return new Promise((allResolve)=>{
        for(let i = 0;i<limit;i++){
            run(i)
        }
        function run(i){
            return new Promise((resolve)=>{
                resolve(fetchApi(fetchArr[index],index))
                index++
            }).then((data)=>{
                res[i] = data
            }).catch((err)=>{
                res[i] = err
            }).finally(()=>{
                fina++
                if(index<fetchArr.length){
                    run(index)
                }
                if(fina === fetchArr.length){
                    allResolve(res)
                }
            })
        }

    })


}
limitQueue(2, fetchArr)
    .then(console.log)
    .catch((res) => {
        console.log('error', res);
    });