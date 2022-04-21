import { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

export default class StudentManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentList: [],
            form: {
                name: '',
                phone: '',
                email: ''
            },
            isValid: false,
            indexSelected: -1
        }
    }
    handleChange = (event) => {
        this.setState((state) => {
            const form = state.form
            form[event.target.name] = event.target.value
            return { form }
        }, () => this.checkInvalidForm())
    }
    handleSelect = (studentSelected, index) => {
        this.setState({
            form: JSON.parse(JSON.stringify(studentSelected)),
            indexSelected: index
        })
      }
    checkInvalidForm = () => {
        const { name, phone, email } = this.state.form
        const value = name && phone && email
        this.setState({
          isValid: value
        })
      }
    handleSubmit = () => {
        if(this.state.isValid){
            const newList = this.state.studentList
            if (this.state.indexSelected > -1) {
                newList.splice(this.state.indexSelected, 1, this.state.form)
            } else {
                newList.push(this.state.form)
            }
            const newForm = {
                name: '',
                phone: '',
                email: ''
            }
            this.setState({
                studentList: newList, 
                form: newForm, isValid: 
                false, indexSelected: -1
            })
        }
    }
    handleDelete = (index) => {
        const newList = this.state.studentList
        newList.splice(index, 1)
        this.setState({
            list: newList
        })
    }
    render() {
        const { studentList, form } = this.state
        return (
            <div className='container mt-4'>
                <h2 style={{textAlign: "center"}}>Student List</h2>
                <div className='my-2'>
                    <label>Name: </label>
                    <input 
                        className='ml-2 w-50'
                        name="name" 
                        value={form.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='my-2'>
                    <label>Phone: </label>
                    <input 
                        className='ml-2 w-50'
                        type="number"
                        name="phone" 
                        value={form.phone}
                        onChange={this.handleChange}
                    />
                </div>
                <div className='my-2'>
                    <label>Email: </label>
                    <input 
                        className='ml-3 w-50'
                        name="email" 
                        value={form.email}
                        onChange={this.handleChange}
                    />
                </div>
                <button 
                    className='mt-2 mb-3 btn btn-secondary'
                    onClick={this.handleSubmit}
                >Submit</button>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { studentList.map((student, index) => (
                            <tr key={index}>
                                <td>{student.name}</td>
                                <td>{student.phone}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button 
                                        className='btn btn-secondary'
                                        onClick={
                                            this.handleSelect.bind(this, student, index)
                                        }
                                    > Edit
                                    </button>
                                    <button 
                                        className='btn btn-secondary ml-2'
                                        onClick={
                                            this.handleDelete.bind(this, index)
                                        }
                                    > Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}