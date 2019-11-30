import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from '../NavBar'
import GameContainer from './GameContainer'


export class MainContainer extends Component {
    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Switch>
                            <Route path='/manager' component={GameContainer} />
                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default MainContainer
