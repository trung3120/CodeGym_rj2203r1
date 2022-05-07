import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return(
    <div>
      <p>You click {count} times!</p>

      <button onClick={() => setCount(count + 1)}>
        Add 1
      </button>
      <br></br>
      <button onClick={() => setCount(count + 2)}>
        Add 2
      </button>
    </div>
  );
}

export default Counter;