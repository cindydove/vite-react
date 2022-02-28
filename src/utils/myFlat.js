Array.prototype.myFlat = function (deep) {
    const isUndefined = typeof deep === 'undefined' || typeof deep === 'null';
    const newDeep = isUndefined ? 1 : deep;
    console.log('dx----deep', deep, newDeep, newDeep >= 1);
    if (newDeep >= 1) {
        return this.reduce(
            (pre, cur) => pre.concat(Array.isArray(cur) ? cur.myFlat(deep - 1) : cur),
            []
        );
        // let arr = [];
        // for (item of this) {
        //     arr = arr.concat(item instanceof Array ? item.myFlat(deep - 1) : item);
        // }
        // return arr;
    } else {
        return [...this];
    }
};
const arrTest = [1, [2, 3, [4, 5]]];

console.log('flat0', arrTest.myFlat(0));
console.log('flat1', arrTest.myFlat(1));
console.log('flat undefined', arrTest.myFlat());
console.log('flat 2', arrTest.myFlat(2));
console.log('flat 3', arrTest.myFlat(3));
console.log('flat Infinity', arrTest.myFlat(Infinity));

const compose = function (...fns) {
    return fns.reduce(
        (pre, cur) =>
            (...args) =>
                pre(cur(...args))
    );
};
