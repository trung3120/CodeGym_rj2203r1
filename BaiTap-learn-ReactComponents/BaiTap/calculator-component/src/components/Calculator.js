import { Component } from 'react';
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
            case 0: this.setState({ 
                        displayValue: parseFloat(this.state.firstNum) + parseFloat(this.state.secondNum) 
                    }); 
                    break;
            case 1: this.setState({ 
                        displayValue: parseFloat(this.state.firstNum) - parseFloat(this.state.secondNum) 
                    }); 
                    break;
            case 2: this.setState({ 
                        displayValue: parseFloat(this.state.firstNum) * parseFloat(this.state.secondNum) 
                    }); 
                    break;
            case 3: this.setState({ 
                        displayValue: parseFloat(this.state.firstNum) / parseFloat(this.state.secondNum) 
                    }); 
                    break;
        }
    }

    render() {
        return (
            <div className='container mt-4 border border-secondary'>
                <div className=''>
                    <h1>Calculator</h1>
                    <input className='ml-4 mt-3 w-50' 
                            type="number" 
                            onChange={(e) => { 
                                this.setState({ 
                                    firstNum: e.target.value 
                                }) 
                            }} 
                            placeholder="First number" 
                    />
                    <input className='mt-1 ml-4 w-50' 
                            type="number" 
                            onChange={(e) => { 
                                this.setState({ 
                                    secondNum: e.target.value 
                                }) 
                            }} 
                            placeholder="Second number" 
                    />
                </div>
                <div className='m-2 ml-4'>
                    <button className="btn btn-outline-secondary"
                            onClick={(e) => { 
                                this.calculate(0) 
                            }}
                    > +
                    </button>
                    <button className="btn btn-outline-secondary ml-3"
                            onClick={(e) => { 
                                this.calculate(1) 
                            }}
                    > -
                    </button>
                    <button className="btn btn-outline-secondary ml-3"
                            value='*'
                            onClick={(e) => { 
                                this.calculate(2) 
                            }}
                    > *
                    </button>
                    <button className="btn btn-outline-secondary ml-3" 
                            value='/' 
                            onClick={(e) => { 
                                this.calculate(3) 
                            }}
                    > /
                    </button>
                </div>
                <div className='ml-4'>
                    <h3>Result: {this.state.displayValue}</h3>  
                </div>
        </div>
      );
    }
}

export default Calculator;