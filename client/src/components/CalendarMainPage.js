import React from 'react';
import CalendarMUI from './CalendarMUI';
import CircleIcon from '@mui/icons-material/Circle';

//CSS
import '../CSS/CalendarMainPage.css';

//MATERIAL UI
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const CalendarMainPage = () => {
  return (
    <div className='calenderOutermostDiv'>
      <div className='exercisesSuggestionHeader'>
          <EventAvailableIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>CALENDAR TRACKING</h3>
          </div>

      <div className='mainCalendarPageDiv'>
          <CalendarMUI/>

          <div>

            {/* <div className='todaysDateCalendarDiv'>
              <CircleIcon sx={{color:'aqua'}}/>
              <h2>Today's Date</h2>
            </div> */}
            <div className='dateDataDiv'>
                    <CircleIcon sx={{marginRight:'10px'}}/>
                    <h3>TODAY'S DATE</h3>
            </div>

            <div className='dateDataDiv'>
                    <CircleIcon sx={{marginRight:'10px'}}/>
                    <h3>TODAY'S DATE</h3>
            </div>

          </div>

      </div>
    </div>
  )
}

export default CalendarMainPage