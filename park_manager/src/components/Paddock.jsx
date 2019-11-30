import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Paddock = (props) => {

    if (!props.paddock) {
        return "Loading..."
    }

    const url = '/paddocks/' + props.paddock.id

    return (
        <Fragment>
            <Link to={url} className="name">{props.paddock.name}</Link>
            <p>Type: {props.paddock.type}</p>
            <p>Security Level: {props.paddock.securityLevel}</p>
            <p>Max. Capacity: {props.paddock.capacity}</p>
        </Fragment>
    )
}

export default Paddock
