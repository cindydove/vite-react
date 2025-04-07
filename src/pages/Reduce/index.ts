Array.prototype.myReduce = function (callback, initialValue) {

    const firstIndex = initialValue === undefined ? 1 : 0;
    let targetValue = initialValue === undefined ? this[0] : initialValue;
   for(let i=firstIndex; i<this.length; i++) {
       targetValue = callback(targetValue, this[i], i, this)
   }
   return targetValue
}

console.log("dx----",[1,2,3,4].myReduce((acc,cur)=>acc+cur),[1,2,3,4].reduce((acc,cur)=>acc+cur))