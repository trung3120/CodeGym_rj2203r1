import './App.css';
import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div className='container'>
      <nav>
        <Link to="/home" className='a'>Home</Link> |{" "}
        <Link to="/contact" className='a'> Contact</Link> |{" "}
        <Link to="/search" className='a'> Search</Link> |{" "}
        <Link to="/logout" className='a'> Logout</Link>
      </nav>
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}
