import React from 'react'
import "./navbar.css"
import { RiMentalHealthFill } from "react-icons/ri"

export default function Navbar() {
  return (
    <nav className='navbarContainer'>
      <div className='logo'>
        <RiMentalHealthFill color ="#fff" size={40}/>
        <h3 className='navbarTitle'>Health and Wellness</h3>
      </div>
      <div>
        <ul className='nav-links'>
            <li><a href='/register'>Sign Up</a></li>
            <li><a href='/login'>Log In</a></li>
            <li><a href='#'>Menu</a></li>
        </ul>
      </div>
    </nav>
  )
}
