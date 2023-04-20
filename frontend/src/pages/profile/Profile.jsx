import React from 'react'
import Sidebar from '../../components/profile/Sidebar'
import VitalsDisplay from '../../components/profile/VitalsDisplay'

export default function Profile() {
  return (
    <div>
      <div className="container-fluid">
            <div className="row wrapper">
                <Sidebar />
                <VitalsDisplay />
            </div>
        </div>
    </div>
  )
}
