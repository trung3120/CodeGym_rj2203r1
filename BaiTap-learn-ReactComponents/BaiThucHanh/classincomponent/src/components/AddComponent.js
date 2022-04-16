import { Component } from 'react';
class AddComponent extends Component {
    render() {
        return <h2>Total of {this.props.firstNum} & {this.props.secondNum} is: {this.props.firstNum + this.props.secondNum}</h2>
    }
}

export default AddComponent;