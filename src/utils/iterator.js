function iteratorFun (iterator){
  let index = 0
  return {
    next:function(){
      if(index < iterator.length){
        return {value:iterator[index ++],done:false}
      }else{
        return {value:undefined,done:true}
      }
    }
  }
}

const arr = iteratorFun([11,21,31])
console.log("dx----",arr.next())
console.log("dx----",arr.next())
console.log("dx----",arr.next())
console.log("dx----",arr.next())
console.log("dx----",arr.next())
