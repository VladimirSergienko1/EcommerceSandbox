import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {FaBarsStaggered} from "react-icons/fa6";
import {BsCart3, BsMoonFill, BsSunFill} from "react-icons/bs";
import NavLinks from "./NavLinks";

const themes = {
    light: 'light',
    dark: 'dark'
}
const themeFromLocalStorage = ()=>{
    return localStorage.getItem('theme') || themes.light
}
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [theme, setTheme] = useState(themeFromLocalStorage)
    const toggleDropdown = ()=>{
        setIsOpen(!isOpen)
    }

    const toggleTheme = () =>{
        const {light, dark} = themes
        const newTheme = theme === light ? dark : light


        setTheme(newTheme)
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as Element).closest('.dropdown')) {
                setIsOpen(false);
            }
        };



        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)

    }, [theme]);


    return (
        <nav className='bg-base-200'>
            <div className='navbar layout'>
                <div className="navbar-start">
                    <NavLink to='/' className='hidden lg:flex btn btn-primary text-3xl items-center'>
                        C
                    </NavLink>
                    <div className="dropdown">
                        <label tabIndex={0} className='btn btn-ghost  lg:hidden' onClick={toggleDropdown}>
                            <FaBarsStaggered className='h-6 w-6'/>
                        </label>
                       <ul tabIndex={0} className={`menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-200 flex gap-y-2 rounded-box w-52 ${isOpen ? 'block' : 'hidden' }`}>
                           <NavLinks />
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className='flex gap-x-2 menu menu-horizontal'><NavLinks/></ul>
                </div>
                <div className="navbar-end">
                    <label className='swap swap-rotate'>
                        <input type='checkbox' checked={theme === themes.dark} onChange={toggleTheme}/>
                        <BsSunFill className='swap swap-on h-6 w-6'/>
                        <BsMoonFill className='swap swap-off h-6 w-6'/>
                    </label>
                    <NavLink to={'/cart'} className='btn btn-ghost btn-circle btn-md ml-4'>
                        <div className="indicator">
                            <BsCart3 className='h-6 w-6'/>
                                <span className='badge badge-primary badge-sm indicator-item'>2</span>
                        </div>
                    </NavLink>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;