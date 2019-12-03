import React from 'react';
import Dinosaur from './Dinosaur.jsx';

const DinosaurDetails = (props) => {

    if (!props.dinosaur) {
        return "Loading..."
    }

    const handleDelete = () => {
        props.onDelete(props.dinosaur.id)
    }

    return (
        <div className="detail-component">
            <h3><Dinosaur dinosaur={props.dinosaur} /></h3>
            <p>Species: {props.dinosaur.species}</p>
            <p>Diet: {props.dinosaur.diet}</p>
            <p>Hunger Level: {props.dinosaur.hunger}</p>
            <p>Threat Level: {props.dinosaur.threatLevel}</p>
            <button onClick={handleDelete}>Delete {props.dinosaur.name}</button>
        </div>
    )
}

export default DinosaurDetails;
