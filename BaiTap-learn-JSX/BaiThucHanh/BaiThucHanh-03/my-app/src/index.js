import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const fruits = [
  'Apple', 'Banana', 'Orange', 'Strawberry', 'Mango', 'Cherry'
];

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>
    <h1>List of fruits</h1>
    <ul>
      { fruits.map(item => (
        <li> { item } </li>
      )) }
    </ul>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
