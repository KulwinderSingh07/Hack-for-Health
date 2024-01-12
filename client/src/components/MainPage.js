import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './mainDashBoard';

//CSS IMPORTS 
import '../CSS/MainPage.css';

const MainPage = () => {
  return (
    <div className='mainPageMainDiv'>
        <Sidebar/>

        {/*Conditional Rendering between components*/}
        <Dashboard/>
    </div>
  )
}

export default MainPage