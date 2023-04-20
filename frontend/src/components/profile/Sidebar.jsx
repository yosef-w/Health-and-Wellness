import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri"

export default function Sidebar() {
  return (
    <div>
      <div className="col-3">
      <ul className="nav flex-column">
        <h1 className="pt-4 pb-2">
            <div className='logo'>
                <RiMentalHealthFill color="#fff" size={40} />
                <h3 className='navbar-title'>Health and Wellness</h3>
            </div>
            </h1>
            <li className="nav-item">
                <a className="nav-link" href="#">
                Profile
                </a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                    Symptoms
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Nutrition
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Providers
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Muscles Affected
                    </a>
                </li>
            </ul>
        </div>
    </div>


  )
}
