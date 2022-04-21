import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class CountNumOfClick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
    }

    increment = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    decrease = () => {
        this.setState({
            number: this.state.number - 1
        });
    }

    render() {
        return (
            <div className='border border-secondary mx-4 my-4'>
                <h3 className='mx-4 mt-4'>Clicked {this.state.number} times</h3>
                <br></br>
                <button 
                    className='btn btn-secondary mx-5 mb-4'
                    onClick={this.increment}
                > +
                </button>
                <button 
                    className='btn btn-secondary mb-4'
                    onClick={this.decrease}
                > -
                </button>
            </div>
        );
    }
}