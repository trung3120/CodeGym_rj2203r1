import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import AlertAfterHiding from './AlertAfterHiding';

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    delele = () => {
        this.setState({
            display: false
        });
    }

    render() {
        let notification;
        if (this.state.display) {
            notification = <AlertAfterHiding />;
        }
        return(
            <div>
                {notification}
                <button onClick={this.delele}>Delete Component</button>
            </div>
            
        );
    }
}