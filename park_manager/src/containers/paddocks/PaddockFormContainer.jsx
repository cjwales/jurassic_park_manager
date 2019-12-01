import React, {Component} from 'react';
import Request from '../../helpers/request'
import PaddockForm from '../../components/paddocks/PaddockForm'

class PaddockFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handlePaddockPost = this.handlePaddockPost.bind(this);
    }

    handlePaddockPost(Paddock){
        console.log("Paddock", Paddock);
        
        const request = new Request();
        request.post('/api/paddocks', Paddock).then(() => {
            window.location = '/paddocks'
        })
    }

    render(){
        return <PaddockForm dinosaurs={this.props.dinosaurs} handlePaddockPost={this.handlePaddockPost}/>
    }
}

export default PaddockFormContainer;