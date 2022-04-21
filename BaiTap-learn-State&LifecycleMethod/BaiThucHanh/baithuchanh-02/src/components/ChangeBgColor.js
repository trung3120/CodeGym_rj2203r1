import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class ChangeBgColor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'black'
        };
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                color: 'yellow'
            });
        }, 2000);
    }

    render() {
        return(
            <div className='container'>
                <div 
                    className='my-5'
                    style={{
                            backgroundColor: this.state.color,
                            height: "300px",
                    }}
                />          
            </div>
        );
    }
}