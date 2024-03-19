// 只有类、类的方法、类的属性才有装饰器。普通的方法、没有装饰器
// // 装饰器函数，它的第一个参数是目标类
// function classDecorator(target) {
//     target.hasDecorator = true
//     return target
// }
//
// // 将装饰器“安装”到Button类上
// @classDecorator
// class Button {
//     // Button类的相关逻辑
// }
//
// // 验证装饰器是否生效
// console.log('Button 是否被装饰了：', Button.hasDecorator)


// 具体的参数意义，在下个小节，这里大家先感知一下操作
function funcDecorator(target, name, descriptor) {
    console.log("dx---",target, name, descriptor)
    let originalMethod = descriptor.value
    descriptor.value = function() {
        console.log('我是Func的装饰器逻辑')
        return originalMethod.apply(this, arguments)
    }
    return descriptor
}

// class Button {
//     @funcDecorator
//     onClick() {
//         console.log('我是Func的原有逻辑')
//     }
// }

//  🙅：会报 SyntaxError: Decorator.js: Leading decorators must be attached to a class declaration (35:0)
// function Button(){
//     @funcDecorator
//     this.onClick = function (){
//         console.log('我是Func的原有逻辑')
//     }
// }

// 🙅：会报 SyntaxError: Decorator.js: Leading decorators must be attached to a class declaration (35:0)
// @funcDecorator
// const onClick = ()=> {
//     console.log('我是Func的原有逻辑')
// }


// 验证装饰器是否生效
const button = new Button()
button.onClick()

