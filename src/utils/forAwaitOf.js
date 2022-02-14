function TimeOut(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}

async function test() {
    let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)];
    for (let item of arr) {
        console.log(Date.now(), item.then(console.log));
    }
}
// 异步迭代器(for-await-of)：循环等待每个Promise对象变为resolved状态才进入下一步。

async function testAwait() {
    let arr = [TimeOut(2000), TimeOut(1000), TimeOut(3000)];
    for await (let item of arr) {
        console.log(Date.now(), item);
    }
}

test();
// testAwait();
