import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri"
import { NavLink } from 'react-router-dom';
import "./navbar.css"

export default function Navbar({ loggedIn, logUserOut}) {
  return (
    <div className="menu-wrapper">
      <div className="container">
        <div className="nav-wrapper">
        <NavLink className="navbar-logo" to="/">
          <div className='logo'>
            <RiMentalHealthFill color="#fff" size={40} />
            <h3 className='navbar-title'>Health and Wellness</h3>
          </div>
          </NavLink>
          <div className="link-wrapper">
            <nav className="nav-menu">
            { loggedIn ? (
            <>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/profile">Profile</NavLink>
              <NavLink className="nav-link" to="/" onClick={() => logUserOut()}>Logout</NavLink>
              <NavLink className="nav-link" to="#">Contact</NavLink>
            </>
          ) : (
            <>
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/register">Sign Up</NavLink>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavLink className="nav-link" to="#">Contact</NavLink>
            </>
          )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};