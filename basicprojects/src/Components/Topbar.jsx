import React, { useState } from 'react'
// import Sidenav from './Sidenav.jsx'
import {NavLink,Link} from "react-router"




export default function Topbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    
    const togglenav = () => {
      setIsNavOpen(!isNavOpen);
    };
  return (
    <>
<nav className={`fixed top-0 left-0 h-screen bg-white shadow-md z-40 transform transition-transform duration-300 ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 w-full sm:w-1/4`}
// 'hidden w-full sm:block sm:w-1/4 bg-white absolute h-screen shadow-md'
>
    <div className="close absolute p-2 right-1 top-1 text-lg sm:hidden  " onClick={togglenav}>
        X
    </div>
    <Link className='m-2 p-2'>Logo</Link>
      <ul className='list-none pt-4'>
          <NavLink to="/" className="list-none w-full">
        <li  className='p-3 m-2 my-2 font-medium w-full rounded-full'>
          Home
        </li>
          </NavLink>

          <NavLink to="/app-1">
        <li className='p-3 m-2 my-2 font-medium w-full rounded-full'>
          Project 1
        </li>
          </NavLink>
          <NavLink to="/app-2">
        <li className='p-3 m-2 my-2 font-medium w-full rounded-full'>
          Project 2
        </li>
          </NavLink>


          <NavLink to="/app-3">
        <li className='p-3 m-2 my-2 font-medium w-full rounded-full'>
          Project 3
        </li>
          </NavLink>

          <NavLink to="/app-4">
        <li className='p-3 m-2 my-2 font-medium w-full rounded-full'>
          Project 4
        </li>
          </NavLink>
      </ul>
    </nav>
    <div className="topbar flex bg-white shadow justify-between">

        <div className=" sm:block part-1 p-2 m-2">
        <svg onClick={togglenav} className='sm:hidden ' xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 16.933 16.933" id="hamburger">
  <path d="M1.971 1.323c-1.058 0-1.058 1.587 0 1.587h12.996c1.059 0 1.059-1.587 0-1.587zm13.018 6.35H1.97c-1.1-.043-1.1 1.65 0 1.587h12.996c1.08.042 1.101-1.587.022-1.587zM1.97 14.023c-1.058 0-1.058 1.587 0 1.587h12.996c1.059 0 1.059-1.587 0-1.587z"></path>
</svg>
        </div>
        {/* <div className="part-2 p-2 m-2"> something to add</div> */}
        <div className="part-3 p-2 m-2">Profile</div>
     
    </div>


       
    
    </>
  )
}
