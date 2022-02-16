import React, { useState } from 'react';

// function Component() {
//     const [a, setA] = useState(1);
//     const [b, setB] = useState('b');
//     console.log('render');
//
//     function handleClickWithPromise() {
//         Promise.resolve().then(() => {
//             setA((a) => a + 1);
//             console.log('dx----a', a);
//             setB('bb');
//             console.log('dx----b', b);
//         });
//     }
//
//     function handleClickWithoutPromise() {
//         setA((a) => a + 1);
//         console.log('dx----a', a);
//         setB('bb');
//         console.log('dx----b', b);
//     }
//
//     return (
//         <>
//             <button onClick={handleClickWithPromise}>
//                 {a}-{b} 异步执行
//             </button>
//             <button onClick={handleClickWithoutPromise}>
//                 {a}-{b} 同步执行
//             </button>
//         </>
//     );
// }

function Component() {
    const [a, setA] = useState(1);
    console.log('a', a);

    function handleClickWithPromise() {
        Promise.resolve().then(() => {
            // setA((a) => a + 1);
            // // setA(a + 1);
            // console.log('a1---', a);
            // setA((a) => a + 1);
            // // setA(a + 1);
            // console.log('a2---', a);

            setA(a + 1);
            console.log('a1---', a);
            setA(a + 1);
            console.log('a2---', a);
            setA(a + 1);
            console.log('a3---', a);
        });
    }

    function handleClickWithoutPromise() {
        // setA((a) => a + 1);
        setA(a + 1);
        console.log('a1---', a);
        setA(a + 1);

        // setA((a) => a + 1);
        console.log('a2---', a);
        setA(a + 1);
        console.log('a3---', a);
    }

    return (
        <>
            <button onClick={handleClickWithPromise}>{a} 异步执行</button>
            <button onClick={handleClickWithoutPromise}>{a} 同步执行</button>
        </>
    );
}

export default Component;
