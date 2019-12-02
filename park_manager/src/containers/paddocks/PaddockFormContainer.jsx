import React, {Component} from 'react';
import Request from '../../helpers/request'
import PaddockForm from '../../components/paddocks/PaddockForm'

class PaddockFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePaddockPost = this.handlePaddockPost.bind(this);
    }

    handlePaddockPost(paddock){
        console.log("paddock", paddock);
        
        const request = new Request();
        request.post('/api/paddocks', paddock).then(() => {
            window.location = '/paddocks'
        })
    }

    render(){
        return <PaddockForm dinosaurs={this.props.dinosaurs} parks={this.props.parks} handlePaddockPost={this.handlePaddockPost}/>
    }
}

export default PaddockFormContainer;