import React from 'react';

const DinosaurForm = (props) => {

    const options = props.paddocks.map((paddock, index) => {
        
        return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    })

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const dinosaur = {
            "name": event.target.name.value,
            "paddock": event.target.paddock.value
        }
        props.handleDinosaurPost(dinosaur);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                <select name="paddock">
                    {options}
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default DinosaurForm;