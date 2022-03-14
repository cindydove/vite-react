function thunkApplyMiddleWare(args){
  return ({dispatch,getState})=>(next)=>(action)=>{
    typeof action === 'function' ? action(dispatch,getState,args) : next(action)
  }
}

const thunk = thunkApplyMiddleWare()
thunk.extractArgs = thunkApplyMiddleWare
export default thunk
