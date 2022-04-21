import { Component } from 'react';

class Football extends Component {
    shoot = (a) => {
        alert(a);
    }
    render() {
        return (
            <button onClick={this.shoot.bind(this, 'Goal!')}>Take the shot!</button>
        );
    }
}

export default Football;