import React, { Component } from 'react';
import Dinosaur from './Dinosaur.jsx';

class DinosaurDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            species: null,
            diet: null,
            hunger: null,
            name: null,
            threatLevel: null,
            paddock: [],
            park: []
        }

        this.handleDelete = this.handleDelete.bind(this);
        this.updatePaddock = this.updatePaddock.bind(this);
        this.feedDinosaur = this.feedDinosaur.bind(this);
        // this.findPaddockById = this.findPaddockById.bind(this);
    }

    componentDidMount() {
        console.log(this.props);

        this.setState({
            species: this.props.dinosaur.species,
            diet: this.props.dinosaur.diet,
            hunger: this.props.dinosaur.hunger,
            name: this.props.dinosaur.name,
            threatLevel: this.props.dinosaur.threatLevel,
            paddock: this.props.dinosaur.paddock.name,
            park: this.props.dinosaur.park
        });
    }


    handleDelete = () => {
        this.props.onDelete(this.props.dinosaur.id)
    }

    // findPaddockById(id) {
    //     const paddock = this.state.paddocks.find((paddock) => {
    //         return paddock.id === parseInt(id)
    //     })
    //     return paddock;
    // }

    updatePaddock = (event) => {
        event.preventDefault();
        console.log("event", event.target[0].value);
        // debugger;
        this.setState({
            paddock: event.target[0].value
        });
    }


    feedDinosaur(){
        this.setState(prevState => {
            return{
                hunger: prevState.hunger - 5
            }
        })
    }


    render() {
        if (!this.props.dinosaur){
            return null;
        }
        const options = this.props.paddocks.map((paddock, index) => {

            return <option key={index} value={paddock.name}>{paddock.name}</option>
        })
        return (
            <div className="detail-component" >
                <h3><Dinosaur dinosaur={this.props.dinosaur} /></h3>
                <p>Species: {this.state.species}</p>
                <p>Diet: {this.state.diet}</p>
                <p>Hunger Level: {this.state.hunger}</p>
                <p>Threat Level: {this.state.threatLevel}</p>
                <p>Paddock: {this.state.paddock}</p>

                <br></br>
                <br></br>
                <button onClick={this.handleDelete}>Delete {this.props.dinosaur.name} ?</button>
                <button onClick={this.feedDinosaur}>Feed {this.props.dinosaur.name} ?</button>
                <br></br>
                <br></br>
                <form onSubmit={this.updatePaddock}>
                    <select name="paddock">
                        {options}
                    </select>
                    <button type="submit">Update paddock?</button>
                </form>


            </div>
        )
    }
}

export default DinosaurDetails;
