import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';

const students = [
  {
    university: 'UED',
    contact: '_junnhn',
    address: 'DaNang'
  },
  {
    university: 'UFL',
    contact: 'stacey.dt_',
    address: 'DaNang'
  },
  {
    university: 'DUT',
    contact: 'thw0026',
    address: 'PhuNinh'
  },
  {
    university: 'DUE',
    contact: '_pntrieu_',
    address: 'PhuNinh'
  },
  {
    university: 'DTU',
    contact: 'vinh_tran5727',
    address: 'NuiThanh'
  },
  {
    university: 'DAU',
    contact: 'daikhuongh',
    address: 'NuiThanh'
  },
  {
    university: 'FPT',
    contact: '_kym.lly_',
    address: 'NuiThanh'
  },
]

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <div>
    <h2>Students</h2>
    <table>
      <thead>
        <tr>
          <th>University</th>
          <th>Contact</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        { students.map(students => (
          <tr>
            <td>{students.university}</td>
            <td>{students.contact}</td>
            <td>{students.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
