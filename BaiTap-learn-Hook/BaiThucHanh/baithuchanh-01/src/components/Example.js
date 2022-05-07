import { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    return(
        <div>
            Giá trị: {count}
            <br></br>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
        </div>
    );
}

export default Example