import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => {
    

    const menuItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/reviews">Reviews</NavLink></li>

    </>




    return (
        <div >
            <div className="navbar bg-base-100 bg-slate-800  ">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden bg-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 text-white text-lg bg-black shadow  rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl"> <span> <img src={logo} height={50} width={50} alt="" /> </span> <span className='text-orange-600 '>Shine</span> </Link>
                </div>
                <div className="navbar-center hidden lg:flex  ">
                    <ul className="menu menu-horizontal p-0 text-white text-lg">
                        {menuItems}
                    </ul>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;