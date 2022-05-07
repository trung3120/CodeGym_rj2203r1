import { useState } from 'react';

function useTimer() {
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    const updateTime = () => {
        const now = new Date();

        setYear(now.getFullYear());
        setMonth(now.getMonth() + 1);
        setDay(now.getDate());
        setHour(now.getHours());
        setMinute(now.getMinutes());
        setSecond(now.getSeconds());
    }

    setInterval(function () {
        updateTime();
    }, 1000)

    return [year, month, day, hour, minute, second];
}

export default useTimer;