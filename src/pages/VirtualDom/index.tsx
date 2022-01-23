import React from 'react';

function dom() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

const dom1 = React.createElement('div', {}, dom(), dom());

function VirtualDom() {
    console.log('dx---dom', dom());
    return <>{dom1}</>;
}

export default VirtualDom;
