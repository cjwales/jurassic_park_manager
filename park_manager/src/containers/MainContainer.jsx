import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.jsx';
import DinosaurList from '../components/dinosaurs/DinosaurList';
import DinosaurDetails from '../components/dinosaurs/DinosaurDetails';
import DinosaurFormContainer from './dinosaurs/DinosaurFormContainer';
import PaddockList from '../components/paddocks/PaddockList';
import PaddockDetails from '../components/paddocks/PaddockDetails';
import PaddockFormContainer from './paddocks/PaddockFormContainer';
import ParkList from '../components/parks/ParkList';
import ParkDetails from '../components/parks/ParkDetails';
import ParkFormContainer from './parks/ParkFormContainer';
import Request from '../helpers/request';
import { log } from 'util';



class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dinosaurs: [],
            paddocks: [],
            parks: []
        }
        this.findDinosaurById = this.findDinosaurById.bind(this);
        this.findPaddockById = this.findPaddockById.bind(this);
        this.handleDelete = this.handleDeleteDinosaur.bind(this);
        this.handleDeletePaddock = this.handleDeletePaddock.bind(this);
    }

    componentDidMount() {
        const request = new Request()

        const promise1 = request.get('/api/dinosaurs');
        const promise2 = request.get('/api/paddocks');
        const promise3 = request.get('/api/parks');
        const promises = [promise1, promise2, promise3]

        Promise.all(promises).then((data) => {
            this.setState({
                dinosaurs: data[0]._embedded.dinosaurs,
                paddocks: data[1]._embedded.paddocks,
                parks: data[2]._embedded.parks
            })
        })
    }

    findDinosaurById(id) {
        const dinosaur = this.state.dinosaurs.find((dinosaur) => {
            return dinosaur.id === parseInt(id)
        })
        return dinosaur;
    }

    findPaddockById(id) {
        const paddock = this.state.paddocks.find((paddock) => {
            return paddock.id === parseInt(id)
        })
        return paddock;
    }

    handleDeleteDinosaur(id) {
        const request = new Request()
        const url = '/api/dinosaurs/' + id;
        request.delete(url).then(() => {
            window.location = '/dinosaurs';
        });
    }

    handleDeletePaddock(id) {
        const request = new Request()
        const url = '/api/paddocks/' + id;
        request.delete(url).then(() => {
            window.location = '/paddocks';
        });
    }

    render() {
        return (
            <div>
                <Router>
                    <React.Fragment>
                        <NavBar />
                        <Switch>

                            <Route exact path="/dinosaurs" render={(props) => {
                                return <DinosaurList dinosaurs={this.state.dinosaurs} />
                            }} />

                            <Route exact path="/paddocks" render={(props) => {
                                return <PaddockList paddocks={this.state.paddocks} />
                            }} />

                            <Route exact path="/parks" render={(props) => {
                                return <ParkList parks={this.state.parks} />
                            }} />

                            <Route exact path="/dinosaurs/new" render={(props) => {
                                return <DinosaurFormContainer parks={this.state.parks} paddocks={this.state.paddocks} />
                            }} />

                            <Route exact path="/paddocks/new" render={(props) => {
                                return <PaddockFormContainer dinosaurs={this.state.dinosaurs} parks={this.state.parks} />
                            }} />

                            <Route exact path="/parks/new" render={(props) => {
                                return <ParkFormContainer paddocks={this.state.paddocks} />
                            }} />

                            <Route exact path="/dinosaurs/:id" render={(props) => {
                                
                                const id = parseInt(props.match.params.id);
                                const dinosaur = this.findDinosaurById(id);
                                console.log(dinosaur)

                                return <DinosaurDetails dinosaur={dinosaur} onDelete={this.handleDeleteDinosaur} paddocks={this.state.paddocks} />
                            }} />

                            <Route exact path="/paddocks/:id" render={(props) => {
                                const id = props.match.params.id;
                                const paddock = this.findPaddockById(id);
                                return <PaddockDetails paddock={paddock} onDelete={this.handleDeletePaddock} />
                            }} />

                            <Route exact path="/parks/:id" render={(props) => {
                                const id = props.match.params.id;
                                const park = this.findParkById(id);
                                return <ParkDetails park={park}/>
                            }} />


                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default MainContainer;