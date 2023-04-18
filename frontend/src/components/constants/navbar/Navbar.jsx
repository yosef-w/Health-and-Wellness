import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri"
import "./navbar.css"

export default function Navbar() {
  return (
    <div className="menu-wrapper">
      <div className="container">
        <div className="nav-wrapper">
          <div className='logo'>
            <RiMentalHealthFill color="#fff" size={40} />
            <h3 className='navbar-title'>Health and Wellness</h3>
          </div>
          <div className="link-wrapper">
            <nav className="nav-menu">
              <a
                href="/"
                className="nav-link"
              >
                Home
              </a>
              <a
                href="/register"
                className="nav-link"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="nav-link"
              >
                Login
              </a>
              <a
                href="/faq"
                className="nav-link"
              >
                FAQ
              </a>
              <a
                href="/contact"
                className="nav-link"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};