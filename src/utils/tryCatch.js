try{
    setTimeout(()=>{
        throw new Error('异步错误');
    },1000)

    // throw new Error('异步错误');

    // new Promise((resolve,reject)=>{
    //     // throw new Error('promise抛出错误');
    //     // resolve('微任务成功')
    //     reject('微任务失败')
    //
    // }).then(()=>{
    //     // throw new Error('微任务抛出错误');
    // }).catch((e)=>{
    //     // console.log("dx----promise catch",e)
    // })
    //
    // // Promise.resolve(throw new Error('微任务抛出错误')).then((res)=>{
    // //     console.log("dx---res",res)
    // // }).catch((e)=>{console.log("dx------------",e)})
}catch(e){console.log("dx----",e)}
window.onerror((e)=>{
    console.log("dx-window",e)
})


// try catch 不能捕获异步代码（包括宏任务和微任务）的错误



