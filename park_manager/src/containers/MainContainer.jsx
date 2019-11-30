import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar'


export class MainContainer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <NavBar />
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default MainContainer
