export const debounce = (callback,interval)=>{
  let timer = null
  const that = this
 return function(){
   timer = setTimeout(()=>{
     callback.bind(that)
   },interval)
 }
}