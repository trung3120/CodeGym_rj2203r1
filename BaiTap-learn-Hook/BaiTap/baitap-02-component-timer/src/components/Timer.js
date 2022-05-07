import { useState, useEffect } from 'react';

export default function Timer() {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        setInterval(() => {
            setTimer(timer - 1);
        }, 1000)
        if (timer == -1) {
            setTimer(10);
          }
    }, [timer]);

    return(
        <div className='container'>
            <h2>CountDown: {timer}</h2>
        </div>
    );
}