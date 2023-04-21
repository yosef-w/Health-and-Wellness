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
              <NavLink className="nav-link" activeClassName="active" to="/profile">Profile</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/" onClick={() => logUserOut()}>Logout</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="#">Contact</NavLink>
            </>
          ) : (
            <>
              <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/register">Sign Up</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="/login">Login</NavLink>
              <NavLink className="nav-link" activeClassName="active" to="#">Contact</NavLink>
            </>
          )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};