import React from 'react'
import '../App'
import { NavLink , Link} from "react-router"
import ToggleSwitch from './ToggleSwitch'
export default function Nav() {
  return (
    <>
      <nav className="bg-gray-800 inline-flex w-full justify-between">
      <Link className='p-2 m-4 font-bold text-yellow-50'>Logo</Link>
      <div className='p-2 m-4'>
       <NavLink to="/
       
       " className="p-2 m-4 text-white hover:bg-slate-800 sm:rounded">Home</NavLink>
       <NavLink to="/blog" className="p-2 m-4 text-white hover:bg-slate-800 sm:rounded">Blog</NavLink>
       <NavLink to="/about" className="p-2 m-4 text-white hover:bg-slate-800 sm:rounded">About</NavLink>
       <NavLink to="/contact" className="p-2 m-4 text-white hover:bg-slate-800 sm:rounded">Contact</NavLink>
       <NavLink to="/nothing" className="p-2 m-4 text-white hover:bg-slate-800 sm:rounded">Nothing</NavLink>
      </div>

        <div className='m-4'>
          {/* <button className="m-3 p-3 rounded bg-blue-500 hover:bg-blue-700  text-white font-bold "> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" id="moon">
              <path fill="#464646" d="M20.21 15.32A8.56 8.56 0 1 1 11.29 3.5a.5.5 0 0 1 .51.28.49.49 0 0 1-.09.57A6.46 6.46 0 0 0 9.8 9a6.57 6.57 0 0 0 9.71 5.72.52.52 0 0 1 .58.07.52.52 0 0 1 .12.53Z"></path>
            </svg> */}
            <ToggleSwitch/>

          {/* </button> */}
        </div>


      </nav>
    </>
  )
}
