import { Component } from 'react';

export default class Home extends Component {
    render() {
        return(
            <div style={{textAlign: "center"}}>
                <div>
                    <h2>Welcome!</h2>
                    <button style={{width: "100px"}} onClick={this.props.onLogOut}>
                        Log out
                    </button>
                </div>
            </div>
        );
    }
}