import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'

const Paddock = ({paddock}) => {
    if(!paddock){
        return "Loading..."
    }

    const url = "/paddocks/" + paddock.id;

    return (
        <Fragment>
            <Link to={url} className="name">{paddock.name}</Link>
        </Fragment>
    )
}

export default Paddock;