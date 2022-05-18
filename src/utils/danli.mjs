//
//
// function Single(name) {
//     this.name = name;
//     this.instance = null;
// }
// Single.getInstance = function (name) {
//     this.instance = this.instance ? this.instance : new Single(name);
//     return this.instance;
// };
// console.log(
//     'dx---Single.getInstance === Single.getInstance',
//     Single.getInstance() === Single.getInstance()
// );
//
// class SingleClass {
//     constructor(name) {
//         this.name = name;
//         this.instance = null;
//     }
//     static getInstance(name) {
//         this.instance = this.instance ? this.instance : new Single(name);
//         return this.instance;
//     }
// }
//
// console.log(
//     'dx---SingleClass.getInstance() === SingleClass.getInstance()',
//     Single.getInstance() === Single.getInstance()
// );
//
// // 自执行
//
// const singleFn = (function () {
//     let instance = null;
//
//     return function (name) {
//         if (instance) {
//             return instance;
//         }
//         this.name = name;
//         instance = this;
//         return this;
//     };
// })();
//
// console.log(
//     "dx--- new Single('sven1') === new Single('jack')",
//     new singleFn('sven1') === new singleFn('jack')
// );
//
// class SingleClass2 {
//     constructor(name) {
//         if (!SingleClass2.instance) {
//             SingleClass2.instance = this;
//             this.name = name;
//         }
//         return SingleClass2.instance;
//     }
// }
//
// console.log(
//     "dx--- new SingleClass2('sven1') === new SingleClass2('jack')",
//     new SingleClass2('sven1') === new SingleClass2('jack')
// );
//
//
// function Danli(name){
//     console.log("dx---Danli.instance",Danli.instance)
//     if(!Danli.instance){
//         Danli.instance = this
//         this.name = name
//     }
//     return Danli.instance
// }
// const single1 = new Danli('sven1')
// const single2 = new Danli('jack')
// console.log(
//   "dx--- danli",
//     single1,
//     single2,
//     single1 === single2
// );
//
//
//
// function Danli1(name){
//     this.name = name
//     Danli1.instance = Danli1.instance || this
//     return Danli1.instance
// }
//  const danli_1 = new Danli1('dx')
//  const danli_2 = new Danli1('zy')
// console.log("dx--Danli1",danli_1,danli_1 === danli_2)


class Danli2{
    constructor() {
        Danli2.instance = Danli2.instance || this
        return Danli2.instance
    }
}

const danli_3 = new Danli2('dx')
const danli_4 = new Danli2('zy')
console.log("dx--Danli1",danli_3,danli_3 === danli_4)



