import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Gnurt');

  useEffect(() => {
    if (count == 10) {
      setCount(0);
    }
  })

  return(
    <div>
      <p>You click {count} times!</p>
      <p>My name is: {name}</p>
      <input 
        onKeyUp={(e) => setName(e.target.value)}
        placeholder="Change name here!!!"
      />
      <button onClick={() => setCount(count + 1)}>
        Click me!
      </button>
    </div>
  );
}

export default App;