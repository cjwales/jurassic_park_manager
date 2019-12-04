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
        props.hunger -= 5;
    }


    return (
        <div>
            <Dinosaur dinosaur={props.dinosaur} />
            <p>Species: {props.dinosaur.species}</p>
            <p>Diet: {props.dinosaur.diet}</p>
            <p>Hunger Level: {props.dinosaur.hunger}</p>
            <p>Threat Level: {props.dinosaur.threatLevel}</p>
            <p>Paddock: {props.dinosaur.paddock.name}</p>

            <br></br>
            <br></br>
            <button onClick={handleDelete}>Delete {props.dinosaur.name} ?</button>
            <button onClick={feedDinosaur}>Feed {props.dinosaur.name} ?</button>
            <br></br>
            <br></br>
            <form onSubmit={handleUpdate}>
                <select name="paddock" id="paddock-select">
                    {options}
                </select>
                <button type="submit">Update paddock?</button>
            </form>


        </div>
    )
}


export default DinosaurDetails;
