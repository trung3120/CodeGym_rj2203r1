import { Routes, Route, Link } from 'react-router-dom';

import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

export default function Router1() {
    return (
        <div>
            <div className='header'>
                <Link className='a' to="/">Home</Link> |{" "}
                <Link className='a' to="/about">About</Link> |{" "}
                <Link className='a' to="/contact">Contact</Link> 
            </div>
            <div className='main'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>

    );
}