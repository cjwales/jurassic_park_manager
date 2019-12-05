import React from 'react';
import Paddock from './Paddock.jsx';


const PaddockDetails = (props) => {

    if (!props.paddock) {
        return "PADDOCK"
    }

    const options = props.dinosaurs.map((dinosaur, index) => {

        return <option key={index} value={dinosaur._links.self.href}>{dinosaur.name}</option>
    })

    const handleDeletePaddock = () => {
        props.onDelete(props.paddock.id)
    }

    const handlePaddockUpdate = (event) => {
        event.preventDefault();
        const paddock = {
            dinosaur: event.target.dinosaur.value
        };
        props.handleUpdatePaddock(props.paddock.id, paddock)
    }

    return (
        <div className="detail-component">
            <Paddock paddock={props.paddock} />
            <p>Name: {props.paddock.name}</p>
            <p>Type: {props.paddock.type}</p>
            <p>Rampaging: {props.paddock.isRampaging}</p>
            <p>Capacity: {props.paddock.capacity}</p>
            <p>Security Level: {props.paddock.securityLevel}</p>
            <br></br>
            <br></br>
            <div className="buttons">
                <button onClick={handleDeletePaddock}>Delete: {props.paddock.name}</button>
            </div>
            <form onSubmit={handlePaddockUpdate}>
                <select name="dinosaur" id="dinosaur-select">
                    {options}
                </select>
                <button className="update-button" type="submit">Transfer Dinosaur</button>
            </form>


        </div>
    )
}

export default PaddockDetails;
