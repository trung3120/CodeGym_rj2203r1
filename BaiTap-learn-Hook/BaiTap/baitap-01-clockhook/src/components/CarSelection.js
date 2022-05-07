import { useState, useEffect } from 'react';

function CarSelection () {
    const [selectedCar, setSelectedCar] = useState('0');
    const [valueCar, setValueCar] = useState("");
    const [selectedColor, setSelectedColor] = useState('4');
    const [valueColor, setValueColor] = useState("");

    const choice = e => {
        setSelectedCar(e.target.value);
        setSelectedColor(e.target.value);
    }

    useEffect(() => {
        switch (selectedCar) {
            case '0':
                setValueCar("Mercedes $600");
                break;
            case '1':
                setValueCar("BMW $1000");
                break;        
            case '2':
                setValueCar("Toyota $500");
                break;
            case '3':
                setValueCar("Hyundai $700");
                break;      
            default:
        }
    }, [selectedCar]);

    useEffect(() => {
        switch (selectedColor) {
            case '4':
                setValueColor("Black");
                break;
            case '5':
                setValueColor("Red");
                break;        
            case '6':
                setValueColor("White");
                break;
            case '7':
                setValueColor("Blue");
                break;      
            default:
        }
    }, [selectedColor]);

    return(
        <div>
            <div>
                Select a car:
                <select onChange={(e) => {choice(e)}}>
                    <option value="0">Mercedes $600</option>
                    <option value="1">BMW $1000</option>
                    <option value="2">Toyota $500</option>
                    <option value="3">Hyundai $700</option>
                </select>
            </div>
            <br></br>
            <div>
                Select a color:
                <select onChange={(e) => {choice(e)}}>
                    <option value="4">Black</option>
                    <option value="5">Red</option>
                    <option value="6">White</option>
                    <option value="7">Blue</option>
                </select>
                <h3>You selected a {valueColor} - {valueCar}</h3>
            </div>
        </div>
    );
}

export default CarSelection;