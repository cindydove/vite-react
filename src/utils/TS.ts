// function identity<T, U>(value: T, message: U): T {
//     console.log(message);
//     return value;
// }
//
// console.log(identity<string, string>('76', 3));
// console.log(identity('76', 3));
//
// function get<T, K extends keyof T>(obj: T, key: K): T[K] {
//     return obj[key];
// }
// interface ITsInfo {
//     name: string;
//     supersetOf: string;
// }
// let tsInfo = {
//     name: 'Typescript',
//     supersetOf: 'Javascript'
// };
// get<ITsInfo, 'key'>(tsInfo, 'name'); //❎
// get<ITsInfo, keyof ITsInfo>(tsInfo, 'name'); //✅
// get(tsInfo, 'name'); //✅
//
//
//
// interface A<T=string> {
//     name: T;
// }
//
// const strA: A = { name: 9 }; //❎
// const strA: A = { name: '9' };  //✅
// const numB: A<number> = { name: 101 };  //✅

// function createArray<T>(length: number, value: T): Array<T> {
//   let result: Array<T> = []
//   for (let i = 0; i < length; i++) {
//     result[i] = value
//   }
//   return result
// }
// let result = createArray<string>(3, 'x')
// console.log(result) // ['x', 'x', 'x']
// let result2 = createArray<number>(3, 3) // T 就相当于一个参数，传什么是什么
// console.log(result2) // [3, 3, 3]

// 接着在调用的时候，可以指定它具体的类型为 string 或 number。当然，也可以不手动指定，而让类型推论自动推算出来：

// function f<T extends string | number>(a: T, b: T) {
//     if (typeof a === 'string') {
//         return a + ':' + b; // no error but b can be number!
//     } else {
//         return a + b; // error as b can be number | string
//     }
// }
//
// const o = {
//     name: '1',
//     age: 18
// };
//
// interface Person {
//     name: string;
//     age: number;
// }
// type child = {
//     name: string;
//     age: number;
//     xx: number;
// };
// type ReadonlyPerson = Readonly<Person>;
//
// type myPick<T, K extends keyof T> = {
//     [P in K]: T[P];
// };
//
// type key = keyof Person;
// type key1 = keyof child;
//
// const str: key1 = 'niii';
// const str1: key = 'niii';
//
// type pick1 = myPick<Person, 'name'>;
//
// const obj: pick1 = { name: '666' };

// export type User = {
//     id: number;
//     kind: string;
// };
//
// function makeCustomer<T extends User>(u: T): User {
//     // Error（TS 编译器版本：v4.4.2）
//     // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
//     // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
//     // but 'T' could be instantiated with a different subtype of constraint 'User'.
//     return {
//         id: u.id,
//         kind: 'customer'
//     };
// }

// export function f<T extends string | number>(a: T, b: T) {
//     if (typeof a === 'string') {
//         return a + ':' + b; // no error but b can be number!
//     } else {
//         return a + b; // error as b can be number | string
//     }
// }
// f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
// f('a', 'b'); // Ok
//
// type T = number | string;
// function f(a: string, b: string): string;
// function f(a: number, b: number): number;
// function f(a: T, b: T) {
//     if (typeof a === 'string') {
//         return a + ':' + b;
//     } else {
//         return a + +b;
//     }
// }
//
// f(2, 3); // Ok
// f(1, 'a'); // Error
// f('a', 2); // Error
// f('a', 'b'); // Ok
//
// interface Test1 {
//     name: string;
// }
//
// interface Test2 extends Test1 {}
//
// type Type1 = {
//     name: string;
// };
// type Type2 = Type1;
//
// const test: Test2 = {
//     name: '111'
// };
//
// function TestFn(obj: Test1) {}
//
//
//
//
// type Exclude<T,U> = T extends U ? never : T
//
// type Extract<T,U> = T extends U ? T :never
//
// type Omit<T,K extends keyof T> = Pick<T,Exclude<keyof T, K>>

type A = 'x' | 'D';
type B = 'x' | 'y' | 'c';
//
// type Y = B extends A ? never : B; // true

type D = B extends A ? number : string;

type C = Exclude<A, B>;

type AB<T> = T extends 'x' ? 'a' : 'b';

type All = AB<'x' | 'y'>;

type Human = {
    name: string;
};
type Duck = {
    name: string;
    occupation: string;
};
type Bool = Duck extends Human ? 'yes' : 'no'; // Bool => 'no'
