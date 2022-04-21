import { Component } from 'react';
import Home from './Home';

export default class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false
        };
    }

    handleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    }

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <Home onLogOut={this.handleLogout}/>
            );
        } 
        return (
            <div style={{textAlign: "center"}}>
                <h2>Please Log In</h2>
                <button style={{width: "100px"}} onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
}