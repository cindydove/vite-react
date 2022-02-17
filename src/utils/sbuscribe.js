/** 请在你的开发工具中，以下代码为模版进行测试，统计运行耗费时长 */
/** 生成一个长度为一亿的数组,数组每个元素取值范围为1到100000之间 */
console.time('运行总耗时');
const TestArray = [];
for (let i = 0; i < 100000000; i++) {
    TestArray.push(Math.ceil(Math.random() * 100000));
}
const target = Math.ceil(Math.random() * 200000); /** 定义一个目标值，范围为1到200000  */

const fun = (array, target) => {
        console.time('您的程序运行耗时')
        /** 请在注释下方写你的实现代码
         ** 注意题目中规则，这个代码将会统计你的时间复杂度
         ** ......
         **/
        let result = []; /** 定义结果数组  */

        const map = new Map();
        for (let i = 0; i < array.length; i ++) {
            const item = array[i];
            const otherIndex = map.get(target - item)
            if (otherIndex !== undefined) {
                result = [otherIndex, i];
                break;
            } else {
                map.set(item, i)
            }
        }

        console.timeEnd('您的程序运行耗时')
        if(result.length > 0) {
            console.log(`目标值为${target}`);
            console.log(`两位数字分别为${array[result[0]]}和${array[result[1]]}`);
            console.log(`其下标分别为${result[0]}和${result[1]}`);
        }
        return result;
    }

console.log(fun(TestArray, target));
console.timeEnd('运行总耗时');