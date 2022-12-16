import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/pillar-logo.png';
const Navber = () => {
    const menuItems = <>
        <li className='m-0 p-0'>
            <Link className='p-0 mr-8 bg-inherit' to='/'>
                <button className='font-normal text-lg text-slate-700'>Home</button>
            </Link>
        </li>
        <li className='m-0 p-0'>
            <Link className='p-0 mr-8 bg-inherit' to='/'>
                <button className='font-normal text-lg text-slate-700'>Brands</button>
            </Link>
        </li>
        <li className='m-0 p-0'>
            <Link className='p-0 mr-8 bg-inherit' to='/'>
                <button className='font-normal text-lg text-slate-700'>Agencies</button>
            </Link>
        </li>
        <li className='m-0 p-0'>
            <Link className='p-0 mr-8 bg-inherit' to='/'>
                <button className='font-normal text-lg text-slate-700'>Blog</button>
            </Link>
        </li>
        <li className='m-0 p-0'>
            <Link className='p-0 mr-5 bg-inherit' to='/'>
                <button className='font-normal text-lg text-slate-700'>Login</button>
            </Link>
        </li>
        <li className='m-0 p-0'>
            <Link className='bg-inherit' to='/blog'>
                <button className='btn btn-primary text-slate-50 font-bold px-5'>Sign Up</button>
            </Link>
        </li>
    </>
    return (
        <div className='sticky top-0 z-30 w-full lg:px-[90px] md:px-[30px] backdrop-blur'>
            <div className="navbar justify-between ">
                <div className="w-full flex justify-between">
                    <img src={logo} alt="" className='w-[125px] h-[36px]' />
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 right-0 gap-3">
                            {menuItems}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;