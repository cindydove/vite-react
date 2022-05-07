function maxSlidingWindow(nums,k){
    const res = []
    const queue = []
    for(let i =0;i<nums.length;i++){
        while(queue.length && nums[i] >= queue[queue.length-1]){
            queue.pop()
        }
        queue.push(i)
        while(queue.length && queue[0]<i-k){
            queue.shift()
        }
        if(i>=k-1){
            res.push(nums[queue[0]])
        }
    }
    return res
}
// 双端队列法
//维护递减性（即队头是最大的值），
// 当即将新入队的元素比原队尾的值大时，将队尾值出队。
// 如果队头不在窗口内，将对头出队
// : nums = [1,3,-1,-3,5,3,6,7], 和 k = 3 输出: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7],3))
