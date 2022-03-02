// 1.持续触发不执行
// 2.不触发的一段时间之后再执行

const debounce = (func, delay, immediate) => {
    let timer = null;
    let can = true;
    return function () {
        const context = this;
        const args = [...arguments];
        if (immediate) {
            if (can) {
                func.apply(context, args);
                can = false;
            }
            clearTimeout(timer);
            timer = setTimeout(() => {
                can = true;
            }, delay);
        } else {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        }
    };
};

export default debounce;
