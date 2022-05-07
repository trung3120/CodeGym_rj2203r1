import { useState, useEffect } from 'react';

function Example () {
    const [selected, setSelected] = useState('0');
    const [valueSelected, setValueSelected] = useState("");

    const choice = e => {
        setSelected(e.target.value);
    }

    useEffect(() => {
        switch (selected) {
            case '0':
                setValueSelected("Java");
                break;
            case '1':
                setValueSelected("Angular");
                break;        
            case '2':
                setValueSelected("Javascript");
                break;
            case '3':
                setValueSelected("PHP");
                break;      
            default:
        }
    }, [selected]);

    return(
        <div>
            Khóa học:
            <select onChange={(e) => {choice(e)}}>
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Javascript</option>
                <option value="3">PHP</option>
            </select>
            <h3>Lựa chọn của bạn là: {valueSelected}</h3>
        </div>
    );
}

export default Example;