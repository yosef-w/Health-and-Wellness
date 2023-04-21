import React, { useState } from 'react';
import NutritionDisplay from '../../components/profile/SavedNutrition';
import Sidebar from '../../components/profile/Sidebar';
import VitalsDisplay from '../../components/profile/VitalsDisplay';
import SavedNutrition from '../../components/profile/SavedNutrition';
import SavedSymptoms from '../../components/profile/SavedSymptoms';

export default function Profile({ flashMessage }) {
    const [activeDisplay, setActiveDisplay] = useState('vitals');
  
    const handleLinkClick = (display) => {
      setActiveDisplay(display);
    };
  
    let displayComponent;
  
    if (activeDisplay === 'vitals') {
      displayComponent = <VitalsDisplay flashMessage={flashMessage}/>;
    } else if (activeDisplay === 'nutrition') {
      displayComponent = <SavedNutrition />;
    } else if (activeDisplay === 'symptoms') {
      displayComponent = <SavedSymptoms />
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
