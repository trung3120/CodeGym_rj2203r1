import './App.css';
import { Routes, Route } from 'react-router-dom';

import Employee from './Components/Employee';
import Login from './Components/Login';
import EmployeeDetail from './Components/EmployeeDetail';

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Login />}></Route>
                <Route path="/employee" element={<Employee />}></Route>
                <Route path="/employee-detail" element={<EmployeeDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
