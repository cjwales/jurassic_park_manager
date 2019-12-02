import React, {Component} from 'react';
import Request from '../../helpers/request'
import DinosaurForm from '../../components/dinosaurs/DinosaurForm'

class DinosaurFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handleDinosaurPost = this.handleDinosaurPost.bind(this);
    }

    handleDinosaurPost(dinosaur){
        console.log("dinosaur", dinosaur);
        
        const request = new Request();
        request.post('/api/dinosaurs', dinosaur).then(() => {
            window.location = '/dinosaurs'
        })
    }

    render(){
        return <DinosaurForm paddocks={this.props.paddocks} parks={this.props.parks} handleDinosaurPost={this.handleDinosaurPost}/>
    }
}

export default DinosaurFormContainer;