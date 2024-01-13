import React from 'react'
//Css imports
import '../CSS/Sidebar.css'
import SidebarTile from './SidebarTiles/SidebarMainTile'
import { Divider } from '@mui/material'
import SidebarNavTile from './SidebarTiles/SidebarSideNavTile';

const Sidebar = () => {
  const iconsArray = ['Dashboard','Exercises','Upload History','Calendar Summary','LogOut'];

  return (
    <>
    <div className='sideBarMainDiv'>
    <SidebarTile/>

    <Divider sx={{ bgcolor: "#4c71f0" }}/>

    {/*Sidbar Navigation Tiles */}
    {iconsArray.map((item)=>{
      return <SidebarNavTile key={item} iconName={item}/>;
    })}

    </div>
    </>
  )
}

export default Sidebar