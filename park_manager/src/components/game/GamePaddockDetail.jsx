import React from 'react'
import GamePaddock from './GamePaddock'

const GamePaddockDetail = (props) => {
    if(!props.paddock) {
        return "Loading..."
    }
    return (
        <div className="component">
            <GamePaddock paddock={props.paddock}/>
        </div>
    )
}

export default GamePaddockDetail
