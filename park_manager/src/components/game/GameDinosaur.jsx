import React, {Component, Fragment} from 'react'


class GameDinosaur extends Component {
    constructor(props){
    super(props);
    this.state = {
        name:null,
        hunger: null,
        species: null
    }
}

componentDidMount(){
    this.setState({name: this.props.name});
    this.setState({hunger: this.props.hunger});
    this.setState({species: this.props.species});

}

incrementHunger(){
    
}

render(){
    return(<Fragment>
        <p>{this.state.name}</p>
        <p>{this.state.species}</p>
        <p>{this.state.hunger}</p>
        </Fragment>
    )
}

    



}

export default GameDinosaur
