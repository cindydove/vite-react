// const iterator = (list)=>{
//     let index = 0
//     const length = list.length
//     return {
//         next(){
//             let done = index>=length
//             let value = done ? undefined : list[index++]
//             return {
//                 done,
//                 value
//             }
//
//         }
//     }
// }
//
// const arr =[1,2,3]
// const iteratorObj = iterator(arr)
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())
// console.log(iteratorObj.next())

const ObjIterator = (obj)=>{
    let index = 0

    const objEnters = Object.entries(obj)

    const length = objEnters.length

    return {
        next(){
            let done = index>=length
            let value = done ? undefined : objEnters[index++]
            return {
                done,
                value
            }

        }
    }
}

const objIterator = ObjIterator({a:1,b:2,c:3})
console.log(objIterator.next())
console.log(objIterator.next())
console.log(objIterator.next())
console.log(objIterator.next())
console.log(objIterator.next())
