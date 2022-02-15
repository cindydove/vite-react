import React from 'react';
import { useLocation } from 'react-router-dom';

function Redux() {
    const location = useLocation();
    console.log('dx---useLocation', location);
    return <>Redux</>;
}

export default Redux;
