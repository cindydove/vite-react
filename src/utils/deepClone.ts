// type of 返回值类型： “number”、“string”、“boolean”、“object”、“function”、“undefined”。
// typeof对于原始类型来说，除了null都可以显示正确类型
// typeof对于对象来说，除了函数都会显示object

// instance of 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

// for in :遍历可枚举的属性,包括实例属性和原型属性,不包含Symbol值作为属性的属性
// hasOwnProperty：检测实例属性（包含可枚举属性和不可枚举属性）中是否含有指定属性,也包含Symbol值作为属性的属性

// 实例属性：实例属性指的是在 `构造函数方法中`定义的属性和方法，每一个实例对象都独立开辟一块内存空间用于保存属性和方法。
// 原型属性：原型属性指的是用于创建实例对象的 `构造函数的原型` 的属性，每一个创建的实例对象都共享原型属性。
export const deepClone = (obj: any) => {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);

    if (typeof obj !== 'object' || obj === null) {
        return obj;
    } else {
        const newObj: Record<string, any> = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key]);
            }
        }
        return newObj;
    }
};
