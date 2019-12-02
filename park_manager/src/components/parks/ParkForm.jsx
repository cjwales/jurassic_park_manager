import React from 'react';

const ParkForm = (props) => {

    // const options = props.paddocks.map((paddock, index) => {
        
    //     return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
    // })



    const handleSubmit = (event) => {
        
        event.preventDefault();
        const Park = {

            "name": event.target.name.value,

            
        }
        props.handleParkPost(Park);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Name" name="name" />

                <button type="submit">Save</button>
                
            </form>
        </div>
    )
}

export default ParkForm;