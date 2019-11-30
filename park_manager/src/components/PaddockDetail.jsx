import React from 'react'
import Paddock from './Paddock'

const PaddockDetail = (props) => {
    if(!props.paddock) {
        return "Loading..."
    }
    return (
        <div className="component">
            <Paddock paddock={props.paddock}/>
        </div>
    )
}

export default PaddockDetail
