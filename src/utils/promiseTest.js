// Promise.prototype.finally()

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success');
//         // reject('fail');
//     }, 1000);
// })
//     .then((res) => {
//         console.log('success', res);
//         return Promise.resolve('success---');
//     })
//     .then((res) => {
//         console.log('xixixixi----', res);
//         return 'xixixixi';
//     })
//     .catch((err) => {
//         console.log('error', err);
//     })
//     .finally(() => {
//         console.log('finally');
//     })
//     .then((info) => {
//         console.log('success---', info);
//         return Promise.reject('fail+++');
//         // return new Promise((resolve, reject) => {
//         //     setTimeout(() => {
//         //         reject('fail----');
//         //     }, 1000);
//         // });
//     })
//     .catch((err) => {
//         console.log('error----', err);
//     });

// Promise.prototype.all()
// Promise.prototype.any()
// Promise.prototype.allSettled()
//
// const promise1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('promise1');
//             // reject('error promise1 ');
//         }, 3000);
//     });
// };
// const promise2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve('promise2');
//             reject('error promise2--------- ');
//         }, 1000);
//     });
// };
// const promise3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('promise3');
//             // reject('error promise3 ');
//         }, 2000);
//     });
// };
//
// // //  Promise.all 只有全部为fulfilled，才会走到then里，否则只要有一个为rejected就会立即catch里面
// Promise.all([promise1(), promise2(), promise3()])
//     .then((res) => {
//         console.log('Promise.all---', res);
//     })
//     .catch((error) => {
//         console.log('Promise.all--- error', error); // error promise3
//     });

// // Promise.allSettled 不管有没有错误，三个的状态都会返回
// Promise.allSettled([promise1(), promise2(), promise3()])
//     .then((res) => {
//         console.log('Promise.allSettled---', res);
//         // 打印结果
//         // [
//         //    {status: 'fulfilled', value: 'promise1'},
//         //    {status: 'fulfilled',value: 'promise2'},
//         //    {status: 'rejected', reason: 'error promise3 '}
//         // ]
//     })
//     .catch((error) => {
//         console.log('Promise.allSettled--- error', error);
//     });

// // Promise.any 只要任一结果为fulfilled，就会走到then里，如果全部为rejected会走到catch里面
// Promise.any([promise1(), promise2(), promise3()])
//     .then((res) => {
//         console.log('Promise.any---', res);
//     })
//     .catch((error) => {
//         console.log('Promise.any--- error', error);
//     });
//
// // Promise.any()跟Promise.race()方法很像，只有一点不同
// // 就是Promise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束
// // Promise.race()最先有结果的就是他的结果
// Promise.race([promise1(), promise2(), promise3()])
//     .then((res) => {
//         console.log('Promise.race---', res);
//     })
//     .catch((error) => {
//         console.log('Promise.race--- error', error);
//     });

// 限制数量、数据数组、处理函数

// function fetchApi(time, index) {
//     return new Promise((resolve, reject) => {
//         console.log(`执行第${index}个`);
//         setTimeout(() => {
//             resolve(`完成第${index}个---${time}`);
//         }, time);
//     });
// }
//
// const fetchArr = [10, 2000, 30, 40, 50, 60, 70, 80, 90, 100];
//
// function limitQueue(limit, fetchArr) {
//     return new Promise((allResolve) => {
//         const result = [];
//         let index = 0;
//         let fina = 0;
//         for (let i = 0; i < limit; i++) {
//             run(i);
//         }
//         function run(i) {
//             new Promise((resolve) => {
//                 const currentFetch = fetchArr[index];
//                 resolve(fetchApi(currentFetch, index));
//                 index++;
//             })
//                 .then((res) => {
//                     result[i] = res;
//                 })
//                 .catch((error) => {
//                     result[i] = error;
//                 })
//                 .finally(() => {
//                     fina++;
//                     if (index < fetchArr.length) {
//                         run(index);
//                     }
//                     if (fina === fetchArr.length) {
//                         allResolve(result);
//                     }
//                 });
//         }
//     });
// }
//
// limitQueue(2, fetchArr)
//     .then(console.log)
//     .catch((res) => {
//         console.log('error', res);
//     });


new Promise((resolve)=>{resolve(1)}).then((res)=>{console.log("dx--res1",res)}).then((res)=>{console.log("dx--res2",res)})}
new Promise((resolve)=>{resolve(2)}).then((res)=>{console.log("dx--res6",res)}).then((res)=>{console.log("dx--res7",res)}).then((res)=>{console.log("dx--res8",res)})
