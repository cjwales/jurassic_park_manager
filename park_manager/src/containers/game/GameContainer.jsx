import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Request from '../../helpers/Request'
import GamePaddockList from '../../components/game/GamePaddockList'
import GamePaddockDetail from '../../components/game/GamePaddockDetail'
import GameDinosaur from '../../components/game/GameDinosaur'


export class GameContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            paddocks: [],
            dinosaurs: [],
            dayCounter: 1,
            remainingFeed: 5,
            dinoElements: null
        }
        this.findPaddockById = this.findPaddockById.bind(this)
        this.incrementDayCounter = this.incrementDayCounter.bind(this)
        this.nextDay = this.nextDay.bind(this)
        this.incrementDinoHunger = this.incrementDinoHunger.bind(this)

    }

    componentDidMount() {
        const request = new Request();
        request.get('/api/paddocks')
            .then((paddockData) => {
                this.setState({ paddocks: paddockData._embedded.paddocks })
            })
        request.get('/api/dinosaurs')
            .then((dinoData) => {
                // this.setState({ dinosaurs: dinoData._embedded.dinosaurs })
                this.prepareDinosaurs(dinoData)
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

    prepareDinosaurs(dinoData) {
        let dinoComponents = [];
        let dino = {};
        for (dino of dinoData._embedded.dinosaurs) {
            dinoComponents.push(<GameDinosaur name={dino.name} species={dino.species} hunger={dino.hunger} />);
        }
        this.setState({
            dinoElements: dinoComponents
        })
    }

    nextDay() {
        this.incrementDayCounter()
        this.incrementDinoHunger()
    }

    incrementDinoHunger() {
        let hungryDinos = [];
        let dino = {};
        for (dino of this.state.dinoElements) {
            dino.hunger += 1;
        }
        this.setState({ dinoElements: hungryDinos })
    }



    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/manager" render={(props) => {
                                return <GamePaddockList paddocks={this.state.paddocks} />
                            }} />
                            <Route exact path="/manager/:id" render={(props) => {
                                const id = props.match.params.id;
                                const paddock = this.findPaddockById(id);
                                return <GamePaddockDetail paddock={paddock} />
                            }} />
                        </Switch>
                    </React.Fragment>
                </Router>
                <h3>Day: {this.state.dayCounter}</h3>
                <button onClick={this.nextDay}>Next Day</button>

                <p>THIS IS TEMP:</p>
                        {this.state.dinoElements}
            </div>
        )
    }
}

export default GameContainer
