function TimeOut(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}
function TimeOut1(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('失败');
        }, time);
    }).catch((err) => {
        console.log('err 1', err);
    });
}

async function test() {
    let arr = [TimeOut(2000), TimeOut1(1000), TimeOut(3000)];
    // for...of 同步迭代器
    for (let item of arr) {
        console.log(Date.now(), item.then(console.log));
    }
}
// 异步迭代器(for-await-of)：循环等待每个Promise对象变为resolved状态才进入下一步。

async function testAwait() {
    let arr = [TimeOut(2000), TimeOut1(1000), TimeOut(3000)];
    try {
        for await (let item of arr) {
            console.log(Date.now(), item);
        }
    } catch {
        console.log(error);
    }
}

// test();
testAwait();
