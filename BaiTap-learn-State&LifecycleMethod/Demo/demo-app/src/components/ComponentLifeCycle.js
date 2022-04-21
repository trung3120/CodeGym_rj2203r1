import { Component } from 'react';

class ComponentLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'green'
        };
    }

    componentWillMount() {
        console.log('ComponentWillMount is running!');
    }

    componentDidMount() {
        console.log('ComponentDidMount is running!');
    }

    render() {
        console.log('Render is running!');
        return (
            <div>
                <button onClick={() => this.setState({color: 'red'})}>Click me!</button>
                <p>{this.state.color}</p>
            </div>
        );
    }
}

class ExUpdatingAndUnmounting extends Component {
    componentWillReceiveProps(newProps) {
        console.log('componentWillReceiveProps is running!')
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate is running!');
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate is running!')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate is running!')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount is running!')
    }
    render() {
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

class ComponentLifeCycle2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 0
        };
        this.setNewNumber = this.setNewNumber.bind(this)
    };
    setNewNumber() {
        this.setState({
            data: this.state.data + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber}>INCREMENT</button>
                <ExUpdatingAndUnmounting myNumber = {this.state.data}/>
            </div>
        );
    }
}

export default ComponentLifeCycle2;