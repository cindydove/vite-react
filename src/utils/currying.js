// 柯里化，英语：Currying(果然是满满的英译中的既视感)，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术

// 支持多参数传递
const curry = (fn, ...args) =>
    // 函数的参数个数可以直接通过函数数的.length属性来访问
    args.length >= fn.length // 这个判断很关键！！！
        ? // 传入的参数大于等于原始函数fn的参数个数，则直接执行该函数
          fn(...args)
        : /**
           * 传入的参数小于原始函数fn的参数个数时
           * 则继续对当前函数进行柯里化，返回一个接受所有参数（当前参数和剩余参数） 的函数
           */
          (..._args) => curry(fn, ...args, ..._args);

const myCurry = (fn, ...args) =>
    fn.length > args.length ? (..._args) => myCurry(fn, ...args, ..._args) : fn(...args);

function add1(x, y, z) {
    return x + y + z;
}
const add = myCurry(add1);
console.log('dx---add', add);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));

const add2 = myCurry(add1, 1);
console.log(add2(2, 3));
console.log(add(2)(3));
