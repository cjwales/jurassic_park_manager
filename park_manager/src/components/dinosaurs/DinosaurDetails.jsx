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
        <div className="component">
            <Dinosaur dinosaur={props.dinosaur} />
        
            <button onClick={handleDelete}>Delete: {props.dinosaur.name} ?</button>
        </div>
    )
}

export default DinosaurDetails;