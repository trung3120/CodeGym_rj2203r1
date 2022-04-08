import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const name = "Gnurtiw";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <h1 style={
    {textAlign: "center",
     color: "wheat"}
  }> { name } </h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
