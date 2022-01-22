// 1.持续触发不执行
// 2.不触发的一段时间之后再执行

const debounce = (func,delay)=>{
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,arguments)
        },delay)
    }
}

export default debounce
