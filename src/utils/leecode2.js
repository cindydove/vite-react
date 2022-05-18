// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。


// 真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// nums1 = [1,2,3,7], m = 4
// nums2 = [2,5,6], n = 3
// 输出: [1,2,2,3,5,6]

const mergeArr = (arr1,arr2)=>{
    const newArr = []
    const arr1Len = arr1.length
    const arr2Len = arr2.length
    let arr1Index = 0
    let arr2Index = 0

    while(arr1Index< arr1Len && arr2Index< arr2Len){
        if(arr1[arr1Index]> arr2[arr2Index]){
            newArr.push(arr2[arr2Index++])
        }else if(arr1[arr1Index] < arr2[arr2Index]){
            newArr.push(arr1[arr1Index++])
        }else{
            newArr.push(arr1[arr1Index++])
            newArr.push(arr2[arr2Index++])
        }
    }
    if(arr1Index===arr1Len){
        arr2.slice(arr2Index) &&  newArr.push(...arr2.slice(arr2Index))
    }else{
        arr1.slice(arr1Index) && newArr.push(...arr1.slice(arr1Index))
    }
    return newArr

}
const nums1 = [1,2,3,7]
const nums2 = [2,5,6]
const nums3 = [3,4,6]
// console.log(mergeArr(nums1,nums2))
// console.log(mergeArr(nums2,nums1))
// console.log(mergeArr(nums2,nums3))


const mergeArr2 = (arr1,arr2)=>{
    let arr1Index = arr1.length-1
    let arr2Index = arr2.length-1
    let k = arr1.length + arr2.length -1
    const newArr = [...arr1]
    while(arr1Index>=0 && arr2Index>=0){
        newArr[k] =  arr1[arr1Index] >= arr2[arr2Index] ? arr1[arr1Index--] : arr2[arr2Index--]
        k--
    }
    if(arr2Index >=0){
        arr1.splice(0,arr2Index+1,...arr2.slice(0,arr2Index))
    }
    return newArr
}
// console.log(mergeArr2(nums1,nums2))
// console.log(mergeArr2(nums2,nums1))
// console.log(mergeArr2(nums2,nums3))


// 入参是温度数组
const dailyTemperatures = function(T) {
    const len = T.length // 缓存数组的长度
    const stack = [] // 初始化一个栈
    const res = (new Array(len)).fill(0) //  初始化结果数组，注意数组定长，占位为0
    for(let i=0;i<len;i++) {
        // 若栈不为0，且存在打破递减趋势的温度值
        while(stack.length && T[i] > T[stack[stack.length-1]]) {
            // 将栈顶温度值对应的索引出栈
            const top = stack.pop()
            // 计算 当前栈顶温度值与第一个高于它的温度值 的索引差值
            res[top] = i - top
        }
        // 注意栈里存的不是温度值，而是索引值，这是为了后面方便计算
        stack.push(i)
    }
    // 返回结果数组
    return res
};

console.log("dx---[73, 74, 75, 71, 69, 72, 76, 73]",dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))


