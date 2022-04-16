import { Component } from 'react';
import '../index.css'
import students from './StudentList';

class StudentInfoComponent extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(students => (
                                <tr>
                                    <td>{students.id}</td>
                                    <td>{students.name}</td>
                                    <td>{students.age}</td>
                                    <td>{students.address}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentInfoComponent;