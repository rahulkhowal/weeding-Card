import React from 'react';
import Navbar from './Component/Navbar'
import { BrowserRouter } from 'react-router-dom'
const Layout = () => {
    return (
        <div className="Base">
            <BrowserRouter>
            <Navbar/>
            </BrowserRouter>
        </div>
    )
};
export default Layout