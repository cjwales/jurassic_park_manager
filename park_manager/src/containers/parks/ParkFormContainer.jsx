import React, {Component} from 'react';
import Request from '../../helpers/request'
import ParkForm from '../../components/parks/ParkForm'

class ParkFormContainer extends Component {
    constructor(props) {
        super(props);
        this.handleParkPost = this.handleParkPost.bind(this);
    }

    handleParkPost(park){
        console.log("Park", park);
        
        const request = new Request();
        request.post('/api/parks', park).then(() => {
            window.location = '/parks'
        })
    }

    render(){
        return <ParkForm paddocks={this.props.paddocks} handleParkPost={this.handleParkPost}/>
    }
}

export default ParkFormContainer;