import React from "react";
import { NavLink } from "react-router-dom";

import './../assets/style.css'

const NavBar = () => {
    return (
        <nav>
            <NavLink className='navLink' to='/home'
                style={({ isActive }) => (isActive ? {
                    backgroundColor: 'lightblue',
                    color: '#252525',
                    padding: '5px 10px',
                    textDecoration: "none",
                    transition: "all 0.3s",
                    borderRadius: '5px'
                } : null)}>
                HOME
            </NavLink>
            <NavLink className='navLink' to='/profile'
                style={({ isActive }) => (isActive ? {
                    backgroundColor: 'lightblue',
                    color: '#252525',
                    padding: '5px 10px',
                    textDecoration: "none",
                    transition: "all 0.3s",
                    borderRadius: '5px'
                } : null)}>
                PROFILE
            </NavLink>
        </nav>
    )
}

export default NavBar