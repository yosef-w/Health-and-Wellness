import React from 'react';
import { RiMentalHealthFill } from 'react-icons/ri';
import './profile.css';

export default function Sidebar(props) {
  const handleLinkClick = (display) => {
    props.onLinkClick(display);
  };

  return (
    <div>
      <div className='sidebar'>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={() => handleLinkClick('vitals')}>
                    Profile
                    </a>
                    </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={() => handleLinkClick('nutrition')}>
                    Nutrition
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleLinkClick('symptoms')}>
                    Symptoms
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Providers
                    </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#" onClick={() => handleLinkClick('muscles')}>
                    Muscles Affected
                    </a>
                </li>
            </ul>
        </div>
    </div>
  );
}
