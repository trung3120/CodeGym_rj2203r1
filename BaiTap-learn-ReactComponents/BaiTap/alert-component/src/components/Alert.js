import { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

const Alert = (props) => {
    return (
        <div className='alert alert-warning' role="role">
            {props.text}
        </div>
    )
}


export default Alert;