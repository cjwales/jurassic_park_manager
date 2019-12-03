import React from 'react';
import Paddock from './Paddock.jsx';

const PaddockDetails = (props) => {

    if (!props.paddock) {
        return "Loading..."
    }

    const handleDeletePaddock = () => {
        props.onDelete(props.paddock.id)
    }

    return (
        <div className="component">
            <Paddock paddock={props.paddock} />
            <p>Name: {props.paddock.name}</p>
            <p>Type: {props.paddock.type}</p>
            <p>Rampage?: {props.paddock.isRampaging}</p>
            <p>Capacity: {props.paddock.capacity}</p>
            <p>Security Level: {props.paddock.securityLevel}</p>

            <button onClick={handleDeletePaddock}>Delete: {props.paddock.name} ?</button>
        </div>
    )
}

export default PaddockDetails;