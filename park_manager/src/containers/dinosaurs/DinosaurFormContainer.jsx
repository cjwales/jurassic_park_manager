import React, {Component} from 'react';
import Request from '../../helpers/request'
import DinosaurForm from '../../components/dinosaurs/DinosaurForm'

class DinosaurFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
    }

    handleDinosaurPost(Dinosaur){
        console.log("Dinosaur", Dinosaur);
        
        const request = new Request();
        request.post('/api/dinosaurs', Dinosaur).then(() => {
            window.location = '/dinosaurs'
        })
    }

    render(){
        return <DinosaurForm paddocks={this.props.paddocks} handleDinosaurPost={this.handleDinosaurPost}/>
    }
}

export default DinosaurFormContainer;