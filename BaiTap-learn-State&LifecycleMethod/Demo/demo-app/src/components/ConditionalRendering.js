import { Component } from 'react';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            inputText: '',
            mode: 'view',
            placeholder: 'Enter Your Name!!'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleChange(e) {
        this.setState({
            inputText: e.target.value
        });
    }

    handleSave() {
        this.setState({
            text: this.state.inputText,
            mode: 'view'
        });
    }

    handleEdit() {
        this.setState({
            mode: 'edit'
        });
    }

    //Rendering with If...else
    render() {
        if (this.state.mode === 'view') {
            return (
                <div>
                    <p>Name: {this.state.text}</p>
                    <button onClick={this.handleEdit}>Click Me!!</button>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Name: {this.state.text}</p>
                    <input 
                        onChange={this.handleChange} 
                        value={this.state.inputText}
                        placeholder={this.state.placeholder}
                    />
                    <button onClick={this.handleSave}>Save</button>
                </div>
            );
        }
    }

    //Rendering with Ternary Operator (Toán tử 3 ngôi)
    // render() {
    //     return (
    //         <div>
    //             {
    //                 this.state.mode === 'view' 
    //                 ? (
    //                     <div>
    //                         <p>Name: {this.state.text}</p>
    //                         <button onClick={this.handleEdit}>Edit</button>
    //                     </div>
    //                 ) 
    //                 : (
    //                     <div>
    //                         <p>Name: {this.state.text}</p>
    //                         <input 
    //                             onChange={this.handleChange} 
    //                             value={this.state.inputText} 
    //                         />
    //                         <button onClick={this.handleSave}>Save</button>
    //                     </div>
    //                 )
    //             }
    //         </div>
    //     );
    // }

}

export default ConditionalRendering;