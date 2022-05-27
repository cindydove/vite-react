import React,{ useEffect,useState} from 'react';
import {Button} from 'antd'

function Error() {


     // 异步代码错误
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         nodefined.error
    //     },1000)
    // },[])


    // promise错误捕获
    // useEffect(()=>{
    //     // Promise.reject("promise error")
    //
    //     const num = 0
    //     num.split('')
    // },[])

    const handle = ()=>{
      const num = 0
        num.split('')
    }


    return (
        <div>
            {/*子组件错误*/}
            {/*{show}*/}
            {/*事件中的错误*/}
            <Button onClick={handle}>click事件</Button>

        </div>
    );
}
export default Error;
