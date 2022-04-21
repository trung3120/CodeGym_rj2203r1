import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class AlertAfterHiding extends Component {
    componentWillUnmount = () => {
        alert('Component sắp Unmoumt!!!')
    }

    render() {
        return(
            <div>
                <h2>Hello Gnurt!!</h2>
            </div>
        );
    }
}