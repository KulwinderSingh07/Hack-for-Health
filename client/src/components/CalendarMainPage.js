import React from 'react';
//CSS
import '../CSS/CalendarMainPage.css';

//MATERIAL UI
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const CalendarMainPage = () => {
  return (
    <div className='mainCalendarPageDiv'>
        <div className='exercisesSuggestionHeader'>
        <EventAvailableIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>CALENDAR TRACKING</h3>
        </div>
    </div>
  )
}

export default CalendarMainPage