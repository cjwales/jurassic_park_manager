import React from 'react'
import Paddock from './Paddock'

const PaddockList = (props) => {
    if(!props.length === 0) {
        return (<p>Loading...</p>)
    }

    const paddocks = props.paddocks.map((paddock, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <Paddock paddock={paddock} />
                </div>
                <button>Feed Dinosaurs</button>
            </li>
        )
    })

    return (
        <div>
        <ul className="component-list">
            {paddocks}
        </ul>
        </div>
    )
}

export default PaddockList
