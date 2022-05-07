import useTimer from './CustomHook';
import 'bootstrap/dist/css/bootstrap.css'


function HookDemo() {
    const [year, month, day, hour, minute, second] = useTimer();

    return (
        <div className='container'>
            <div className='main border border-secondary'>
                Thời gian hiện tại là: {day}/{month}/{year} {hour}:{minute}:{second}  
            </div>
        </div>
    );
}

export default HookDemo;