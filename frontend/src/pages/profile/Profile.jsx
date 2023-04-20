import React from 'react';
import Sidebar from '../../components/profile/Sidebar';
import VitalsDisplay from '../../components/profile/VitalsDisplay';

export default function Profile() {
  return (
    <div className="row">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col-9">
        <VitalsDisplay />
      </div>
    </div>
  );
}
