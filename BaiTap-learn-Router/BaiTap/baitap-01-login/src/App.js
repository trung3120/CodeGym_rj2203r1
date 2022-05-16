import './App.css';
import { Routes, Route } from 'react-router-dom';

import Login from './Components/Login';
import Home from './Components/Home';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
