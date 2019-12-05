import React from 'react';

const PaddockForm = (props) => {

    const options = props.dinosaurs.map((dinosaur, index) => {
        
        return <option key={index} value={dinosaur._links.self.href}>{dinosaur.name}</option>
    })

    const optionsPark = props.parks.map((park, index) => {
        
        return <option key={index} value={park._links.self.href}>{park.name}</option>
    })

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const paddock = {
            "name": event.target.name.value,
            "type": event.target.type.value,
            "isRampaging": event.target.isRampaging.value,
            "capacity": event.target.capacity.value,
            "securityLevel": event.target.securityLevel.value,
            "dinosaur": event.target.dinosaur.value,
            "park": event.target.park.value
        }
        props.handlePaddockPost(paddock);
    }

    return (
        <div className="form-component">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                {/* <input type="text" placeholder="Type" name="type" /> */}
                <select name="type">
                    <option value="carnivore">Carnivore</option>
                    <option value="herbivore">Herbivore</option>
                </select>
                {/* <input type="Boolean" placeholder="Rampage?" name="isRampaging" /> */}
                <select name="isRampaging">
                    <option value="true">Rampaging</option>
                    <option value="false">Not Rampaging</option>
                </select>
                <input type="number" placeholder="Capacity" name="capacity" min="0" max="20"/>
                <input type="number" placeholder="Security Level" name="securityLevel" min="1" max="3"/>

                <select name="dinosaur">
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

export default PaddockForm;