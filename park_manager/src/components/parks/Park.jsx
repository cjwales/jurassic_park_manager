import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'

const Park = ({park}) => {
    if(!park){
        return "Loading..."
    }

    const url = "/parks/" + park.id;

    return (
        <Fragment>
            <Link to={url} className="name">{park.name}</Link>

        </Fragment>
    )
}

export default Park;