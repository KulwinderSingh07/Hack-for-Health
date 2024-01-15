import React from 'react'

//Material UI Imports
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

//CSS Imports
import '../../CSS/SidebarMainTile.css';

//Assets imports
import DoctorImage from '../../assets/images/doctor.jpg';

const SidebarTile = () => {
  return (
    <div className="sidebarTileMain">
        <img src={DoctorImage} className='iconSideBar'/>
        
        <div className='sidebarTileMainBottom'>
          <HealthAndSafetyIcon style={{fontSize:'3vw',marginBottom:'-1.5vh'}}/>
          <h2>MediTrack360 Dashboard</h2>
        </div>
    </div>
  )
}

export default SidebarTile