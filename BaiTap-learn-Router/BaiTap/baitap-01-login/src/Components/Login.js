import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState();    
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const login = () => {
        if (email === "admin@gmail.com" && password === "letmein") {
            navigate("/");
        } else {
            alert("error!! please login again!!")
        }
    }

    return(
        <div className='login'>
            <h2>Login</h2>
            <div>
                <label>Email: </label>
                <input 
                    type="email" 
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                />  
            </div>
            <div>
                <label>Password: </label>
                <input 
                    type="password" 
                    name="password"
                    onChange={e => setPassword(e.target.value)}
                />  
            </div>
            <input type="submit" onClick={login}/>
        </div>
    );
}