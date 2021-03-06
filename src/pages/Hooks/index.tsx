import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Button } from 'antd';

function HooksTest() {
    const [test, setTest] = useState(0);
    useEffect(() => {
        console.log('useEffect-不设置依赖项');
        return () => {
            console.log('useEffect-不设置依赖项-return ');
        };
    });
    useEffect(() => {
        console.log('useEffect--空数组');
        return () => {
            console.log('useEffect--空数组-return ');
        };
    }, []);
    useLayoutEffect(() => {
        console.log('useLayoutEffect----空数组');
        return () => {
            console.log('useLayoutEffect----空数组-return ');
        };
    }, []);
    useLayoutEffect(() => {
        console.log('useLayoutEffect----不设置依赖项');
        return () => {
            console.log('useLayoutEffect----不设置依赖项-return ');
        };
    });

    return (
        <div>
            <Button
                onClick={() => {
                    setTest(test + 1);
                }}
            >
                测试
            </Button>
        </div>
    );
}

export default HooksTest;
