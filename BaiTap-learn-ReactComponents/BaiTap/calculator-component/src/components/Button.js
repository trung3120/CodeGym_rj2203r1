import { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div className={this.props.className} 
                onClick={this.props.onClick}
            >
                {this.props.label}
            </div>
        );
    }
}

export default Button;