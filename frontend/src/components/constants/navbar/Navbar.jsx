import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri"
import { Link } from 'react-router-dom';
import "./navbar.css"

export default function Navbar({ loggedIn, logUserOut}) {
  return (
    <div className="menu-wrapper">
      <div className="container">
        <div className="nav-wrapper">
        <Link className="navbar-logo" to="/">
          <div className='logo'>
            <RiMentalHealthFill color="#fff" size={40} />
            <h3 className='navbar-title'>Health and Wellness</h3>
          </div>
          </Link>
          <div className="link-wrapper">
            <nav className="nav-menu">
              { loggedIn ? (
                <>
                  <Link className="nav-link" to="#">Profile</Link>
                  <Link className="nav-link" to="/" onClick={() => logUserOut()}>Logout</Link>
                  <Link className="nav-link" to="#">FAQ</Link>
                </>
              ) : (
                <>
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/register">Sign Up</Link>
                  <Link className="nav-link" to="/login">Login</Link>
                  <Link className="nav-link" to="#">FAQ</Link>
                  <Link className="nav-link" to="#">Contact</Link>
              </>
              )}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};