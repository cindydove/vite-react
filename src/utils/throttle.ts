// 按照频率有规律的执行
// 持续触发并不会执行多次
// 到一定时间再去执行

// const throttle = (func,delay)=>{
//     let run = true
//     let timer = null
//    return function(){
//         if(run){
//             run = false
//             timer = setTimeout(()=>{
//                 func.apply(this, arguments)
//                 run = true
//                 clearTimeout(timer)
//             },delay)
//         }
//
//    }
// }

const throttle = (func, delay) => {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                func.apply(this, arguments);
                clearTimeout(timer);
                timer = null;
            }, delay);
        }
    };
};

export default throttle;
