// @ts-ignore
Array.prototype.myReduce = (fn,init)=>{
  const hasInit = init !== undefined
  const arr:any[] = this ||[]
  let total = hasInit ?  init : arr?.[0]
  arr?.forEach((item,index)=>{
    if(hasInit){
      index>0 && (total = fn(total,item))
    }else{
      total = fn(total,item)
    }
  })
  return total
}

export const m = 1