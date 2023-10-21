import React from 'react';
import {NavLink} from "react-router-dom";

const links = [
    {id: 1, url:'/', text: 'Home'},
    {id: 2, url:'about', text: 'About'},
    {id: 3, url:'products', text: 'Products'},
    {id: 4, url:'cart', text: 'Cart'},
    {id: 5, url:'checkout', text: 'Checkout'},
    {id: 6, url:'orders', text: 'Orders'},
]
const NavLinks = () => {
    return (
        <>
            {links.map((link)=>{
                return(<li key={link.id}>
                    <NavLink className='capitalize' to={link.url}>
                        {link.text}
                    </NavLink>
                </li>)
            })}

        </>
    );
};

export default NavLinks;