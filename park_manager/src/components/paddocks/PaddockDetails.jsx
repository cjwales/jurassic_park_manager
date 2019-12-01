import React from 'react';
import Paddock from './Paddock.jsx';

const PaddockDetails = (props) => {

    if (!props.paddock) {
        return "Loading..."
    }

    const handleDelete = () => {
        props.onDelete(props.paddock.id)
    }

    return (
        <div className="component">
            <Paddock paddock={props.paddock} />
        
            <button onClick={handleDelete}>Delete: {props.paddock.name} ?</button>
        </div>
    )
}

export default PaddockDetails;