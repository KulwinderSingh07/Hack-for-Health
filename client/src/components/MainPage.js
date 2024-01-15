import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './mainDashBoard';
import ExercisesPage from './ExercisesPage';


const MainPage = () => {
  return (
    <>
        <Sidebar/>
        <div>

        {/*Conditional Rendering between components*/}
        <div className='renderSectionDiv'>
            <Dashboard/>
        </div>
    </div>
    </>
    
  )
}

export default MainPage