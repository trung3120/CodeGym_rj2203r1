import { useState } from 'react';

export default function InputNameForm () {
    const [username, setUsername] = useState("");
    
    const handleChange = (e) => {
        setUsername(e.target.value);
    }

    let header;
    if (username) {
        header = <h1>Hello {username}</h1>;
    } else header = "";

    return(
        <form>
            {header}
            <p>Enter your name</p>
            <input 
                type="text" 
                value={username}
                onChange={handleChange}/>
        </form>
    )
}