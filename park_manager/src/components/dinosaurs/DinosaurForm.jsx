import React from 'react';

const DinosaurForm = (props) => {

    const options = props.paddocks.map((paddock, index) => {
        
        return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    const optionsPark = props.parks.map((park, index) => {
        
        return <option key={index} value={park._links.self.href}>{park.name}</option>
    })

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const dinosaur = {
            "species": event.target.species.value,
            "diet": event.target.diet.value,
            "hunger": event.target.hunger.value,
            "name": event.target.name.value,
            "threatLevel": event.target.threatLevel.value,
            "paddock": event.target.paddock.value,
            "park": event.target.park.value
            
        }
        props.handleDinosaurPost(dinosaur);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Species" name="species" />
                <input type="text" placeholder="Diet" name="diet" />
                <input type="number" placeholder="Hunger" name="hunger" />
                <input type="text" placeholder="Name" name="name" />
                <input type="number" placeholder="Threat Level" name="threatLevel" />
                <select name="paddock">
                    {options}
                </select>
                <select name="park">
                    {optionsPark}
                </select>
                <button type="submit">Save</button>
                
            </form>
        </div>
    )
}

export default DinosaurForm;