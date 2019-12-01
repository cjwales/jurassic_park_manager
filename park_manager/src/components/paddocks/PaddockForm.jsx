import React from 'react';

const PaddockForm = (props) => {

    const options = props.dinosaurs.map((dinosaur, index) => {
        
        return <option key={index} value={dinosaur._links.self.href}>{dinosaur.name}</option>
    })

    const handleSubmit = (event) => {
        
        event.preventDefault();
        const paddock = {
            "name": event.target.name.value,
            "dinosaur": event.target.dinosaur.value
        }
        props.handlePaddockPost(paddock);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" name="name" />
                <select name="dinosaur">
                    {options}
                </select>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default PaddockForm;