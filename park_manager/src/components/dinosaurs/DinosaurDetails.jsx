import React from 'react';
import Dinosaur from './Dinosaur.jsx';

const DinosaurDetails = (props) => {

    if (!props.dinosaur) {
        return "DINOSAUR"
    }

    const options = props.paddocks.map((paddock, index) => {

        return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    const handleDelete = () => {
        props.onDelete(props.dinosaur.id)
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        const dinosaur = {
            paddock: event.target.paddock.value
        };
        props.handleUpdateDinosaur(props.dinosaur.id, dinosaur)
    }


    const feedDinosaur = () => {
        let newHungerLevel = props.dinosaur.hunger - 5;
        if (props.dinosaur.hunger > 4){
        const dinosaur = {
            hunger: newHungerLevel
        };
        props.handleUpdateDinosaur(props.dinosaur.id, dinosaur)
    }}


    return (
        <div className="detail-component">
            <Dinosaur dinosaur={props.dinosaur} />
            <p>Species: {props.dinosaur.species}</p>
            <p>Diet: {props.dinosaur.diet}</p>
            <p>Hunger Level: {props.dinosaur.hunger}</p>
            <p>Threat Level: {props.dinosaur.threatLevel}</p>
            <p>Paddock: {props.dinosaur.paddock.name}</p>

            <br></br>
            <br></br>
            <div className="buttons">
            <button onClick={handleDelete}>Delete {props.dinosaur.name}</button>
            <button onClick={feedDinosaur}>Feed {props.dinosaur.name}</button>
            </div>
            <br></br>
            <br></br>
            <form onSubmit={handleUpdate}>
                <select name="paddock" id="paddock-select">
                    {options}
                </select>
                <button className="update-button" type="submit">Transfer Dinosaur</button>
            </form>


        </div>
    )
}


export default DinosaurDetails;

