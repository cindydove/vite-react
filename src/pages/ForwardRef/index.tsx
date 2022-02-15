import React, { useRef, Component } from 'react';

function Child1() {
    return <>Child1</>;
}

class Child2 extends Component {
    render() {
        return <div>Child2</div>;
    }
}

const ForwardChild = React.forwardRef((props, ref) => {
    console.log('dx---ForwardChild ref', ref);
    // return <button ref={ref}>{props.children}</button>;
    return <Child2 ref={ref}>{props.children}</Child2>;
});

export default function ForwardParent() {
    const ref = useRef();
    console.log('dx----ref', ref);
    return <ForwardChild ref={ref}></ForwardChild>;
}
