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
    }

    componentDidMount() {
        console.log(this.props);
        
        this.setState({
            species: this.props.dinosaur.species,
            diet: this.props.dinosaur.diet,
            hunger: this.props.dinosaur.hunger,
            name: this.props.dinosaur.name,
            threatLevel: this.props.dinosaur.threatLevel,
            paddock: this.props.dinosaur.paddock,
            park: this.props.dinosaur.park
        });
    }

   
    handleDelete = () => {
        this.props.onDelete(this.props.dinosaur.id)
    }

    updatePaddock = (event) => {
        event.preventDefault();
        const dinosaur = {
            "species": event.target.species.value,
            "diet": event.target.diet.value,
            "hunger": event.target.hunger.value,
            "name": event.target.name.value,
            "threatLevel": event.target.threatLevel.value,
            "paddock": event.target.paddock.value,
            "park": event.target.park.value

        }
        this.props.handleDinosaurPost(dinosaur);
    }

    feedDinosaur(){
        this.setState(prevState => {
            return{
                hunger: prevState.hunger -5
            }
        })
    }


    render() {
        if (!this.props.dinosaur){
            return null;
        }
        const options = this.props.paddocks.map((paddock, index) => {

            return <option key={index} value={paddock._links.self.href}>{paddock.name}</option>
        })
        return (
            <div className="component" >
                <Dinosaur dinosaur={this.props.dinosaur} />
                <p>Species: {this.state.species}</p>
                <p>Diet: {this.state.diet}</p>
                <p>Hunger Level: {this.state.hunger}</p>
                <p>Threat Level: {this.state.threatLevel}</p>
                <p>Paddock: {this.state.paddock.name}</p>
                <select name="paddock">
                    {options}
                </select>
                <button onClick={this.updatePaddock}>Update paddock?</button>
                <br></br>
                <br></br>
                <button onClick={this.handleDelete}>Delete {this.props.dinosaur.name} ?</button>
                <button onClick={this.feedDinosaur}>Feed {this.props.dinosaur.name} ?</button>


            </div>
        )
    }
}

export default DinosaurDetails;