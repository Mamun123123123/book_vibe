import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const Links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border rounded-3xl border-green-500 px-3 py-1"
              : "px-3 py-1"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border rounded-3xl border-green-500 px-3 py-1"
              : "px-3 py-1"
          }
        >
          Mark As Read
        </NavLink>
      </li>

      <li>
        <NavLink
          to={"/wishlist"}
          className={({ isActive }) =>
            isActive
              ? "text-green-500 border rounded-3xl border-green-500 px-3 py-1"
              : "px-3 py-1"
          }
        >
          Page to Read
        </NavLink>
      </li>
    </>
  )

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 sm:px-6 md:px-10">
      
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow z-50"
          >
            {Links}
          </ul>
        </div>

        <h2 className="font-bold text-lg sm:text-xl md:text-2xl">
          Book Vibe
        </h2>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          {Links}
        </ul>
      </div>

      <div className="navbar-end flex gap-2 sm:gap-3">
        <button className="btn btn-success text-white btn-sm sm:btn-md">
          Sign in
        </button>

        <button className="btn btn-primary text-white btn-sm sm:btn-md">
          Sign up
        </button>
      </div>
    </div>
  )
}

export default Navbar