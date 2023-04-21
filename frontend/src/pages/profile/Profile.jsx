import React, { useState } from 'react';
import NutritionDisplay from '../../components/profile/SavedNutrition';
import Sidebar from '../../components/profile/Sidebar';
import VitalsDisplay from '../../components/profile/VitalsDisplay';
import SavedNutrition from '../../components/profile/SavedNutrition';

export default function Profile() {
    const [activeDisplay, setActiveDisplay] = useState('vitals');
  
    const handleLinkClick = (display) => {
      setActiveDisplay(display);
    };
  
    let displayComponent;
  
    if (activeDisplay === 'vitals') {
      displayComponent = <VitalsDisplay />;
    } else {
      displayComponent = <NutritionDisplay />;
    }
  
    return (
      <div className="row">
        <div className="col-3">
          <Sidebar onLinkClick={handleLinkClick} />
        </div>
        <div className="col-9">
          {displayComponent}
        </div>
        <div id="spacer"></div>
      </div>
    );
  }
