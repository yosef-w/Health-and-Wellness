import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri"
import './profile.css'

export default function Sidebar() {
  return (
    <div>
      <div className='sidebar'>
            <ul className="nav flex-column">
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
