import { useNavigate, useLocation } from "react-router-dom";

export default function EmployeeDetail() {
    let location = useLocation();
    let navigate = useNavigate();

    const back = () => {
        navigate("/employee")
    }

    return(
        <div className="homepage">
            <h2>Employee Detail: </h2>
            <p>Id: {location.state.id}</p>
            <p>Name: {location.state.name}</p>
            <p>Age: {location.state.age}</p>
            <button onClick={back}>Back</button>
        </div>
    );
}