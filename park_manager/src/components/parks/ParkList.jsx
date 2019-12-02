import React from 'react';
import Park from './Park.jsx';

const ParkList = (props) => {
    const parks = props.parks.map((park, index) => {
        return(
            <li key={index} className="component-item">
                <div className="component">
                    <Park park={park}/>
                </div>
            </li>
        )
    })

    return (
        <ul className="component-list">
            {parks}
        </ul>
    )
}

export default ParkList;