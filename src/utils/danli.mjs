

function Single(name) {
    this.name = name;
    this.instance = null;
}
Single.getInstance = function (name) {
    this.instance = this.instance ? this.instance : new Single(name);
    return this.instance;
};
console.log(
    'dx---Single.getInstance === Single.getInstance',
    Single.getInstance() === Single.getInstance()
);

class SingleClass {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        this.instance = this.instance ? this.instance : new Single(name);
        return this.instance;
    }
}

console.log(
    'dx---SingleClass.getInstance() === SingleClass.getInstance()',
    Single.getInstance() === Single.getInstance()
);

// 自执行

const singleFn = (function () {
    let instance = null;

    return function (name) {
        if (instance) {
            return instance;
        }
        this.name = name;
        instance = this;
        return this;
    };
})();

console.log(
    "dx--- new Single('sven1') === new Single('jack')",
    new singleFn('sven1') === new singleFn('jack')
);

class SingleClass2 {
    constructor(name) {
        if (!SingleClass2.instance) {
            SingleClass2.instance = this;
            this.name = name;
        }
        return SingleClass2.instance;
    }
}

console.log(
    "dx--- new SingleClass2('sven1') === new SingleClass2('jack')",
    new SingleClass2('sven1') === new SingleClass2('jack')
);

