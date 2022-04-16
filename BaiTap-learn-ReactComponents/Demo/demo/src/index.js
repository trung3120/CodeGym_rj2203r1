import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import PropTypes from 'prop-types';

const container = document.getElementById("root");
const root = createRoot(container);

class Hi extends React.Component {
  constructor() {
    super();
    this.state = {age: 18};
  }

  render() {
    return <h2>Hi, Gnurtiw!! {this.state.age}</h2>
  }
}


//Component In Component
class Name extends React.Component {
  render() {
    return <h3>_Junnhn</h3>
  }
}

class Age extends React.Component {
  render() {
    return (
      <div>
        <h1>Who 18 year old??</h1>
        <Name />
      </div>
    );
  }
}

function Hello() {
  return <h2>Hello, Gnurtiw!!</h2>
}

//Props
class App extends React.Component {
  render() {
    return (
      <div>
        <h2>My name: {this.props.name}</h2>
        <h2>My age: {this.props.age}</h2>
      </div>
    );
  }
}
App.defaultProps = {
  name: "Huỳnh Ngọc Trung",
  age: 18,
}

//Xác thực props
class ConfirmProps extends React.Component {
  render() {
    return (
      <div>
        <h3>Name: {this.props.propArray}</h3>
        <h3>Age: {this.props.propBoolAge ? 18 : 22}</h3>
        <h3>Func: {this.props.propfunc(3)}</h3>
        <h3>Phone Number: {this.props.propPhoneNumber}</h3>
        <h3>String: {this.props.propString}</h3>
        <h3>Class: {this.props.propObject.objectValue1}</h3>
        <h3>Address: {this.props.propObject.objectValue2}</h3>
        <h3>Country: {this.props.propObject.objectValue3}</h3>
      </div>
    );
  }
}

ConfirmProps.propTypes = {
  propArray: PropTypes.array.isRequired, 
  propBoolAge: PropTypes.bool.isRequired,
  propFunc: PropTypes.func,
  propNumber: PropTypes.number,
  propString: PropTypes.string,
  propObject: PropTypes.object
 }

ConfirmProps.defaultProps = {
  propArray: ['g', 'n', 'u', 'r', 't'],
  propBoolAge: true,
  propfunc: function(e) {return e},
  propPhoneNumber: "079xxx2260",
  propString: "gnurtiw...",
  propObject: {
    objectValue1: "18CNTT3",
    objectValue2: "DaNang",
    objectValue3: "VietNam"
  }
}

root.render(<ConfirmProps />);
