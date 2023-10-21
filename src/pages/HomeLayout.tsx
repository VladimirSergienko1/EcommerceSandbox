import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <section className='layout py-20 text-4xl'>
                <Outlet/>
            </section>
        </>
    );
};

export default HomeLayout;