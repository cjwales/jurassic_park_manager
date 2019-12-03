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
        <div className="detail-component">
            <h3><Paddock paddock={props.paddock} /></h3>
            <p>Type: {props.paddock.type}</p>
            <p>Capacity: {props.paddock.capacity}</p>
            <p>Security Level: {props.paddock.securityLevel}</p>
            <div className="delete-paddock-button">
                <button onClick={handleDeletePaddock}>Delete {props.paddock.name}</button>
            </div>
        </div>
    )
}

export default PaddockDetails;
