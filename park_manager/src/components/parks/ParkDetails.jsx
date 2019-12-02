import React from 'react';
import Park from './Park.jsx';

const ParkDetails = (props) => {

    if (!props.park) {
        return "Loading..."
    }

    const handleDelete = () => {
        props.onDelete(props.park.id)
    }

    return (
        <div className="component">
            <Park park={props.park} />
            <p>Species: {props.park.species}</p>
            <p>Diet: {props.park.diet}</p>
            <p>Hunger Level: {props.park.hunger}</p>
            <p>Threat Level: {props.park.threatLevel}</p>
        
            <button onClick={handleDelete}>Delete: {props.park.name} ?</button>
        </div>
    )
}

export default ParkDetails;