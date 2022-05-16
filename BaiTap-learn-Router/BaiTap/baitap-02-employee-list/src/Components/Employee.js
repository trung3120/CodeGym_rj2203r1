import { useNavigate, useLocation } from "react-router-dom";
import '../App.css';

export default function Employee() {

    const employees = [
        {
            id: 1,
            name: "Gnurt",
            age: 22
        },
        {
            id: 2,
            name: "Drake",
            age: 20
        },
        {
            id: 3,
            name: "Thuw",
            age: 22
        },
        {
            id: 4,
            name: "Ueirt",
            age: 22
        },
    ];

    const location = useLocation();
    const navigate = useNavigate();
    
    const showDetail = (employee) => {
        navigate('/employee-detail', { state: employee });
    }
    console.log(location);
    return (
        <div className="container">
            Logged in info: {location.state.username} - {location.state.password}
            <hr />
            <table className="table table-striped">
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {employees.map((currentValue, index) => (
                        <tr key={index}>
                            <td>{currentValue.id}</td>
                            <td>{currentValue.name}</td>
                            <td>{currentValue.age}</td>
                            <td>
                                <button className="btn btn-secondary" onClick={(e) => { showDetail(currentValue) }}>Detail</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}