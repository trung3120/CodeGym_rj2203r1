import { Component } from 'react';

class Phone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Apple",
            model: "Iphone 13 Pro Max",
            color: "Matte Black",
            year: "2022"
        };
    }
    changeColor = () => {
        this.setState({color: "Sierra Blue"});
    }
    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>It is a {this.state.color}</p> 
                <p>{this.state.model}</p> 
                <p>from {this.state.year}</p>
                
                <button type="button" onClick={this.changeColor}>
                    changeColor
                </button>
            </div>
        );
    }
}

export default Phone;