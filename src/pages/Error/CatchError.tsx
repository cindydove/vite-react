import React, {useEffect, useState} from 'react';
import { Button,Space } from 'antd';


function CatchError() {
    const makeRequest = ()=> Promise.reject('promise err')

    return (
        <Space size={15} >
            {/*资源错误*/}
            {/*<img src="https://yun.tuia.cn/image/kkk.png"/>*/}
            <Button onClick={()=>{
                let num = 0
                num.split()
            }}>
                同步错误
            </Button>

            <Button onClick={()=>{
                setTimeout(() => {
                    let num = 0
                    num.split()
                }, 0)
            }}>
                异步错误
            </Button>

            <Button onClick={async()=>{
               await makeRequest()
            }}>
                async-await
            </Button>

            <Button onClick={()=>{
                makeRequest()
            }}>
                Promise错误
            </Button>


            <Button onClick={()=>{
                // try {
                //     throw 222
                // }catch (e){
                //     console.error("dx--",e)
                // }

                throw 222
            }}>
                throw
            </Button>

            {/*<Button onClick={()=>{*/}
            {/*    fetch('https://www.aaa.com/test')*/}
            {/*}}>*/}
            {/*    跨域*/}
            {/*</Button>*/}

        </Space>
    );
}
export default CatchError;
