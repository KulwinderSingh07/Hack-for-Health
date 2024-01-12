import React from 'react'
//Css imports
import '../CSS/Sidebar.css'
import SidebarTile from './SidebarTiles/SidebarMainTile'
import { Divider } from '@mui/material'
import SidebarNavTile from './SidebarTiles/SidebarSideNavTile';

const Sidebar = () => {
  const iconsArray = ['Dashboard','Exercises','Upload History'];

  return (
    <>
    <div className='sideBarMainDiv'>
    <SidebarTile/>

    <Divider sx={{ bgcolor: "#4c71f0" }}/>

    {/*Sidbar Navigation Tiles */}
    {iconsArray.map((item)=>{
      return <SidebarNavTile key={item} iconName={item}/>;
    })}

    {/*Bottom Logic for Log Out*/}
    <div className='sideBarBottom'>
      <SidebarNavTile iconName={'LogOut'}/>
    </div>

    </div>
    </>
  )
}

export default Sidebar