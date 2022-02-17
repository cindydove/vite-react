Function.prototype.myBind = function (context, ...arg) {
    let newThis = context;
    if (typeof context === 'undefined' || typeof context === 'null') {
        newThis = window;
    }
    const fn = this;
    return function (...args) {
        console.log('newTHis', newThis, arg);
        fn.myApply(newThis, [...arg.slice(1), ...args]);
    };
};

Function.prototype.myApply = function (context, argList) {
    context = context || window;
    context.fn = this;
    const result = context.fn(...argList);
    delete context.fn;
    return result;
};

const num = new Number(1);

function Test(name, age) {
    console.log('this----', this, name, age);
}

// Test.myApply(num, ['dx', 28]);
Test.bind(num, 'dx')();
console.log('dx---', num);
