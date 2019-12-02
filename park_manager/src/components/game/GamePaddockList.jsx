import React from 'react'
import GamePaddock from './GamePaddock'

const GamePaddockList = (props) => {
    if(!props.length === 0) {
        return (<p>Loading...</p>)
    }

    const paddocks = props.paddocks.map((paddock, index) => {
        return (
            <li key={index} className="component-item">
                <div className="component">
                    <GamePaddock paddock={paddock} />
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

export default GamePaddockList
