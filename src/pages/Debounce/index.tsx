import React from 'react';
import { Input } from 'antd';
import debounce from '@/utils/debounce';
import throttle from '@/utils/throttle';
import styles from './index.module.scss';

function Debounce() {
    return (
        <div className={styles.container}>
            <h3>防抖</h3>
            <Input
                className={styles.input}
                onChange={debounce((e: any) => {
                    console.log('dx---- e', e.target);
                }, 1000)}
            ></Input>

            <h3>节流</h3>
            <Input
                className={styles.input}
                onChange={throttle((e: any) => {
                    console.log('我一秒执行一次', new Date().getTime());
                }, 1000)}
            ></Input>
        </div>
    );
}
export default Debounce;
