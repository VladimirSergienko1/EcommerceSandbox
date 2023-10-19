import React from 'react';
import {Outlet} from "react-router-dom";

const HomeLayout = () => {
    return (
        <div >
            <nav >
                <span className='text-center text-primary text-4xl'>Hello</span>
            </nav>
            <Outlet/>
        </div>
    );
};

export default HomeLayout;