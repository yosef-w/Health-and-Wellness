import React from 'react'
import { RiMentalHealthFill } from "react-icons/ri"
import "./footer.css"

export default function Footer() {
    return (
        <div className="footer">
          <div className="container">
            <div className="footer-wrapper">
              <div className='logo'>
                <RiMentalHealthFill color="#fff" size={40} />
                <h3 className='navbar-title'>Health and Wellness</h3>
              </div>
            </div>
          </div>
          <div className="footer-bottom-wrapper">
            <div className="small footer-small">
              Yosef Wolday © 2023.
            </div>
          </div>
        </div>
      );
}
