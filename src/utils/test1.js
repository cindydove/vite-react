//


// 延迟打印数组 [1,2,3,4,5]，每一次打印的初始延迟为 1000ms，增长延迟为 500ms。
/*
0s:    1                  0
1s:    2   ==> 1s       1000
2.5s:  3   ==> 1.5s     1500
4.5s:  4   ==> 2.0s
7s:    5   ==> 2.5s
*/
const arr = [1,2,3,4,5]
// let time = 1000
//
//
// for (let i=0;i<arr.length;i++){
//     const time = i<1 ? 0 : 1000+500*i
//     setTimeout(()=>{
//         console.log(i)
//     }, time)
// }
let i = 0
let time = 0
function timeout(){
    setTimeout(()=>{
        console.log(arr[i])
        if(i< arr.length){
            i++
            time = i<1 ? 0 : 1000+500*(i-1)
            timeout()
        }

    }, time)
}
timeout()
