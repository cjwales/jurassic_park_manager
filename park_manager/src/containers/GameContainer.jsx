import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Request from '../helpers/Request'
import PaddockList from '../components/PaddockList'
import PaddockDetail from '../components/PaddockDetail'

export class GameContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paddocks: [],
            dinosaurs: [],
            dayCounter: 1,
            remainingFeed: 5
        }
        this.findPaddockById = this.findPaddockById.bind(this)
        this.incrementDayCounter = this.incrementDayCounter.bind(this)
        this.increaseDinosaurHunger = this.increaseDinosaurHunger.bind(this)
        this.nextDay = this.nextDay.bind(this)

    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/paddocks')
            .then((paddockData) => {
                this.setState({ paddocks: paddockData._embedded.paddocks })
            })
        request.get('/api/dinosaurs')
            .then((dinoData) => {
                this.setState({ dinosaurs: dinoData._embedded.dinosaurs })
            })
    }

    findPaddockById(id) {
        return this.state.paddocks.find((paddock) => {
            return paddock.id === parseInt(id);
        })
    }

    incrementDayCounter() {
        this.setState(prevState => {
            return { dayCounter: prevState.dayCounter + 1 }
        })
    }

    increaseDinosaurHunger = () => {
        this.setState(state => {
            const paddocks = state.paddocks.map(item => item.dinosaurs.hunger + 1);
            return {
                paddocks,
            };
        });
    };

    nextDay() {
        this.incrementDayCounter()
        this.increaseDinosaurHunger()
    }



    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/manager" render={(props) => {
                                return <PaddockList paddocks={this.state.paddocks} />
                            }} />
                            <Route exact path="/manager/:id" render={(props) => {
                                const id = props.match.params.id;
                                const paddock = this.findPaddockById(id);
                                return <PaddockDetail paddock={paddock} />
                            }} />
                        </Switch>
                    </React.Fragment>
                </Router>
                <h3>Day: {this.state.dayCounter}</h3>
                <button onClick={this.nextDay}>Next Day</button>
            </div>
        )
    }
}

export default GameContainer
