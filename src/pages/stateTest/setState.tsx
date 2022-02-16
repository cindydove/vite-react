import React, { useEffect } from 'react';

// class Component extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             a: 1,
//             b: 'b'
//         };
//     }
//
//     handleClickWithPromise = () => {
//         Promise.resolve().then(() => {
//             this.setState({ ...this.state, a: 'aa' });
//             console.log('dx----a', this.state.a);
//             this.setState({ ...this.state, b: 'bb' });
//             console.log('dx----b', this.state.b);
//         });
//     };
//
//     handleClickWithoutPromise = () => {
//         this.setState({ ...this.state, a: 'aa' });
//         console.log('dx----a', this.state.a);
//         this.setState({ ...this.state, b: 'bb' });
//         console.log('dx----b', this.state.b);
//     };
//
//     render() {
//         console.log('render');
//         return (
//             <>
//                 <button onClick={this.handleClickWithPromise}>异步执行</button>
//                 <button onClick={this.handleClickWithoutPromise}>同步执行</button>
//             </>
//         );
//     }
// }

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 1
        };
    }

    handleClickWithPromise = () => {
        Promise.resolve().then(() => {
            this.setState({ a: this.state.a + 1 });
            console.log('a1----', this.state.a);

            this.setState({ a: this.state.a + 1 });
            console.log('a2----', this.state.a);
        });
    };

    handleClickWithoutPromise = () => {
        this.setState({ a: this.state.a + 1 });
        console.log('a1----', this.state.a);

        this.setState({ a: this.state.a + 1 });
        console.log('a2----', this.state.a);
    };

    render() {
        console.log('a', this.state.a);
        return (
            <>
                <button onClick={this.handleClickWithPromise}>异步执行</button>
                <button onClick={this.handleClickWithoutPromise}>同步执行</button>
            </>
        );
    }
}

export default Component;

// useState/setState   在合成事件和生命周期中都是合并执行再render，不会立即更新state的结果    在setTimeOut，Promise.then中不会合并执行，所以每执行一次会render一次
