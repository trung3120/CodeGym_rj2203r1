import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div className='container'>
    <div className='card'>
      <div className='card--header'></div>
      <img className='avatar' 
      src="https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg" 
      alt="avatar"/>
      <div className='card--body'>
        <div>
          <p className='text-header'>Gnurtiw</p>
          <p className='text-sub'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <button className='btn third'>Follow</button>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
