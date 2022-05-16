import { Routes, Route } from 'react-router-dom';

import Category from './Category';
import Product from './Product';

export default function Router2() {
    return (
        <div>
            <div className='main'>
                <Routes>
                    <Route path="/" element={<Category />} />
                    <Route path="/product/:categoryId" element={<Product />} />
                </Routes>
            </div>
        </div>

    );
}