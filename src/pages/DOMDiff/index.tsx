import React, { useState } from 'react';

const oldList = [2, 1, 3, 4, 2, 5];
const newList = [3, 2, 4];
const newList1 = [3, 4, 5];

function DomDiff() {
    const [list, setList] = useState(oldList);
    return (
        <>
            <button
                onClick={() => {
                    setList(newList);
                }}
            >
                new1
            </button>
            <button
                onClick={() => {
                    setList(newList1);
                }}
            >
                new2
            </button>
            {list.map((item) => (
                <div key={item}>{item}</div>
            ))}
        </>
    );
}

export default DomDiff;
