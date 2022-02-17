import React from 'react'
import './index.module.scss'

function BFC(){
    return <div>
        <div className="commonDiv">1</div>
        <div className="commonDiv">2</div>
    </div>
}

export default BFC