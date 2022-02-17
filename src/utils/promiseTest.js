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

const promise1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise1');
            // reject('error promise1 ');
        }, 3000);
    });
};
const promise2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise2');
            // reject('error promise2 ');
        }, 1000);
    });
};
const promise3 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise3');
            // reject('error promise3 ');
        }, 2000);
    });
};

//  Promise.all 只有全部为fulfilled，才会走到then里，否则只要有一个为rejected就会立即catch里面
Promise.all([promise1(), promise2(), promise3()])
    .then((res) => {
        console.log('Promise.all---', res);
    })
    .catch((error) => {
        console.log('Promise.all--- error', error); // error promise3
    });

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
