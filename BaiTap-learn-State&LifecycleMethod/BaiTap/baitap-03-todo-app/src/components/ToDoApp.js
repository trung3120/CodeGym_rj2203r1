import { Component } from 'react';

export default class ToDoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            item: ''
        };
    }
    handleChange = (event) => {
        this.setState({
            item: event.target.value
        });
    }
    handleAddItem = () => {
        if(this.state.item){
            const newList = this.state.list
            newList.push(this.state.item)
            this.setState({
                list: newList, 
                item: ''
            })
        }
      }
    render() {
        const { list, item } = this.state
        return(
            <div style={{textAlign: "center"}}>
                <h2>Todo List</h2>
                <input 
                    value={item} 
                    onChange={this.handleChange}
                />
                <button 
                    style={{marginLeft: "10px"}}
                    onClick={this.handleAddItem}
                > Add
                </button>
                {
                    list.map((item, index) => (
                        <p key={index}>
                            {item} 
                        </p>
                    ))
                }
            </div>
        )
    }
}