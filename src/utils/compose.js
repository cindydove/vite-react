// function compose(...funcs) {
//     if (funcs.length === 0) {
//         return arg => arg
//     }
//
//     if (funcs.length === 1) {
//         return funcs[0]
//     }
//     debugger
//     return funcs.reduce((a, b) => (...args) => a(b(...args)))
// }


// 使用： compose(fn1,fn2,fn3,...,fn)

function compose(...fnList){
    if(fnList.length===0)
    return fnList.reduce((pre,cur)=>(...args)=>pre(cur(...args)))


}