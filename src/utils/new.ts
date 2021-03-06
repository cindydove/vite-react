// 创建一个空的简单JavaScript对象，即 {}；
// 将构造函数的作用域赋给新对象（this指向新对象）；
// 执行构造函数中的代码（为新对象添加属性）；
// 如果该函数没有返回对象，则返回this。

function _new(ctor:Function, ...args:any) {
  if (typeof ctor !== 'function') {
    throw 'ctor must be a function';
  }
  // 创建新的对象
  let newObj = new Object();
  // 让新创建的对象可以访问构造函数原型（constructor.prototype）所在原型链上的属性；
  newObj.__proto__ = ctor.prototype;
  // 将构造函数的作用域赋给新对象（this指向新对象）；
  // 执行构造函数中的代码
  let res = ctor.apply(newObj, [...args]);

  let isObject = typeof res === 'object' && res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : newObj;
}

// 简易版 Object.create() 方法的实现
function _create(proto:any) {
  if (typeof proto !== "object" && typeof proto !== "function") {
    // 类型校验
    throw new TypeError("proto必须为对象或者函数");
  } else if (proto === null) {
    // null 特殊处理
    throw new Error("在浏览器中暂不支持传递null");
  }

  // 创建一个构造函数
  function F() {}
  // 更改其 prototype
  F.prototype = proto;

  // 返回构造的实例， 这个时候返回的实例和传入的 proto中间多了一层 F
  return new F();
};


export default _new