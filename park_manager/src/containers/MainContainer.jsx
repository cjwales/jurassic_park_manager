import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.jsx';
import DinosaurList from '../components/dinosaurs/DinosaurList';
import DinosaurDetails from '../components/dinosaurs/DinosaurDetails';
import DinosaurFormContainer from './dinosaurs/DinosaurFormContainer';
import PaddockList from '../components/paddocks/PaddockList';
import PaddockDetails from '../components/paddocks/PaddockDetails';
import PaddockFormContainer from './paddocks/PaddockFormContainer';
import Request from '../helpers/request';



class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dinosaurs: [],
            paddocks: []
        }
        this.findDinosaurById = this.findDinosaurById.bind(this);
        this.findPaddockById = this.findPaddockById.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleDeletePaddock = this.handleDeletePaddock.bind(this);
    }

    componentDidMount() {
        const request = new Request()

        const promise1 = request.get('/api/dinosaurs');
        const promise2 = request.get('/api/paddocks');
        const promises = [promise1, promise2]

        Promise.all(promises).then((data) => {
            this.setState({
                dinosaurs: data[0]._embedded.dinosaurs,
                paddocks: data[1]._embedded.paddocks
            })
        })
    }

    findDinosaurById(id) {
        const Dinosaur = this.state.dinosaurs.find((Dinosaur) => {
            return Dinosaur.id === parseInt(id)
        })
        return Dinosaur;
    }

    findPaddockById(id) {
        const Paddock = this.state.paddocks.find((Paddock) => {
            return Paddock.id === parseInt(id)
        })
        return Paddock;
    }

    handleDelete(id) {
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

                            <Route exact path="/dinosaurs/new" render={(props) => {
                                return <DinosaurFormContainer paddocks={this.state.paddocks} />
                            }} />

                            <Route exact path="/paddocks/new" render={(props) => {
                                return <PaddockFormContainer dinosaurs={this.state.dinosaurs} />
                            }} />

                            <Route exact path="/dinosaurs/:id" render={(props) => {
                                const id = props.match.params.id;
                                const Dinosaur = this.findDinosaurById(id);
                                return <DinosaurDetails Dinosaur={Dinosaur} onDelete={this.handleDelete} />
                            }} />

                            <Route exact path="/paddocks/:id" render={(props) => {
                                const id = props.match.params.id;
                                const Paddock = this.findPaddockById(id);
                                return <PaddockDetails Paddock={Paddock}/>
                            }} />


                        </Switch>
                    </React.Fragment>
                </Router>
            </div>
        )
    }
}

export default MainContainer;