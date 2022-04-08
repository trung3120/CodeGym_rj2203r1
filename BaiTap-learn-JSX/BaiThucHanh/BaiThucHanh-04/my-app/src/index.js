import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

const tick = () => {
  root.render(
    <div>
      <h1>Gnurtiw</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
