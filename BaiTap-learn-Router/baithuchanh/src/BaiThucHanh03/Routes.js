import { Routes, Route } from 'react-router-dom';

import Category from './Category';
import Product from './Product';

export default function Router3() {
    return (
        <div>
            <div className='main'>
                <Routes>
                    <Route path="/" element={<Category />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
            </div>
        </div>

    );
}