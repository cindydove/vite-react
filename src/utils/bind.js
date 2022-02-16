Function.prototype.myBind = function (context, ...arg) {
    if (typeof this !== 'function') {
        throw Error('有点子问题啊');
    }
    let newThis = context;
    if (typeof context === 'undefined' || typeof context === 'null') {
        newThis = window;
    }
    const fn = this;
    return function () {
        console.log('newTHis', newThis, arg);
        fn.apply(newThis, [...arg.slice(1)]);
    };
};

function Test() {}
