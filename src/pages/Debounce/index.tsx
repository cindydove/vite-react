import React from 'react';
import { Input, Button } from 'antd';
import debounce from '@/utils/debounce';
import throttle from '@/utils/throttle';
import styles from './index.module.scss';

function Debounce(props) {
    const { history } = props;
    return (
        <div className={styles.container}>
            <h3>防抖</h3>
            <Input
                className={styles.input}
                onChange={debounce(
                    (e: any) => {
                        console.log('dx---- e', e.target);
                    },
                    1000,
                    true
                )}
            ></Input>

            <h3>节流</h3>
            <Input
                className={styles.input}
                onChange={throttle((e: any) => {
                    console.log('我一秒执行一次', new Date().getTime());
                }, 1000)}
            ></Input>
            <Button
                onClick={() => {
                    history.push(
                        `/redux?name=${encodeURIComponent('丁鑫')}&hand=${[
                            1, 2, 3
                        ]}&age=27&beauty=${true}`
                    );
                }}
            >
                点击
            </Button>
        </div>
    );
}
export default Debounce;
