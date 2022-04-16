import { Component } from 'react';
import Button from './Button';
import "bootstrap/dist/css/bootstrap.css";

class Calculator extends Component {
    constructor () {
        super();
        this.state = {
            firstNum: 0,
            secondNum: 0,
            operator: null,
            displayValue: '',
        };
    };

    calculate = (operator) => {
        switch (operator) {
            case "+": this.setState({ 
                displayValue: parseFloat(this.state.firstNum) + parseFloat(this.state.secondNum) 
                      }); 
                    break;
            case "-": this.setState({ 
                displayValue: parseFloat(this.state.firstNum) - parseFloat(this.state.secondNum) 
                      }); 
                    break;
            case "*": this.setState({ 
                displayValue: parseFloat(this.state.firstNum) * parseFloat(this.state.secondNum) 
                      }); 
                    break;
            case "/": this.setState({ 
                displayValue: parseFloat(this.state.firstNum) / parseFloat(this.state.secondNum) 
                      }); 
                    break;
            default: this.setState({ 
                displayValue: "Invalid input" 
                      }); 
            break;
        }
    }

    render() {
        return (
            <div className='calculator container mt-4 border border-secondary'>
                <div className=''>
                    <input className='ml-4 mt-3 w-50' 
                            type="number" 
                            onChange={(e) => { 
                                this.setState({ 
                                    firstNum: e.target.value 
                                }) 
                            }} 
                            placeholder="Enter the first number" 
                    />
                    <input className='mt-1 ml-4 w-50' 
                            type="number" 
                            onChange={(e) => { 
                                this.setState({ 
                                    secondNum: e.target.value 
                                }) 
                            }} 
                            placeholder="Enter the second number" 
                    />
                </div>
                <div className='m-2 ml-4'>
                    <Button className="btn btn-outline-secondary" onClick={(e) => { 
                        this.calculate("+") }} label='+'>
                    </Button>
                    <Button className="btn btn-outline-secondary ml-3" onClick={(e) => { 
                        this.calculate("-") }} label='-'>
                    </Button>
                    <Button className="btn btn-outline-secondary ml-3" onClick={(e) => { 
                        this.calculate("*") }} label='*'>
                    </Button>
                    <Button className="btn btn-outline-secondary ml-3" onClick={(e) => { 
                        this.calculate("/") }} label='/'>
                    </Button> 
                </div>
                <div className='ml-4'>
                    <h3>Result: {this.state.displayValue}</h3>  
                </div>
        </div>
      );
    }
}

export default Calculator;