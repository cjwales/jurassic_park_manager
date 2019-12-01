import React from 'react';
import Paddock from './Paddock.jsx';

const PaddockList = (props) => {
    const paddocks = props.paddocks.map((paddock, index) => {
        return(
            <li key={index} className="component-item">
                <div className="component">
                    <Paddock paddock={paddock}/>
                </div>
            </li>
        )
    })

    return (
        <ul className="component-list">
            {paddocks}
        </ul>
    )
}

export default PaddockList;