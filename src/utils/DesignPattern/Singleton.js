// 单例模式的几种实现方式

// class Singleton{
//     getInstance(){
//         if(Singleton.instance){
//             return Singleton.instance
//         }else{
//             Singleton.instance = new Singleton()
//             return Singleton.instance
//         }
//     }
// }

// const Singleton = (function (){
//     let instance
//     class Single{}
//     return function (){
//         if(!instance){
//             instance = new Single()
//         }
//         return instance
//     }
// })()
//



class Singleton{
    constructor() {
        this.name = 'dx'
        this.age = '18'
        if(!Singleton.instance){
            Singleton.instance = this
        }
        return Singleton.instance
    }
}
let single1 = new Singleton()
let single2 = new Singleton()

console.log("dx---",single1,single2)
console.log("dx---",single1===single2)