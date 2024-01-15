import React from 'react';
import CalendarMUI from './CalendarMUI';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { Divider, Select } from '@mui/material';
import {FormControl} from '@mui/material';
import {InputLabel} from '@mui/material';
import {MenuItem} from '@mui/material';
import { useState } from 'react';
import Sidebar from './Sidebar';

//CSS
import '../CSS/CalendarMainPage.css';

//MATERIAL UI
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const CalendarMainPage = () => {
  const [selectedMonth, setSelectedMonth] = useState(1); // Default to January
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  // Assuming you want a range of years, adjust the startYear and endYear accordingly
  const startYear = 2020;
  const endYear = new Date().getFullYear() + 5; // Adjust as needed

  const handleChangeMonth = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
        <Sidebar/>
        <div className='calenderOutermostDiv'>
      <div className='exercisesSuggestionHeader'>
          <EventAvailableIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>CALENDAR TRACKING</h3>
          </div>

      <div className='mainCalendarPageDiv'>
          <CalendarMUI/>

          <div className='maindateDivWrapper'>

            {/* <div className='todaysDateCalendarDiv'>
              <CircleIcon sx={{color:'aqua'}}/>
              <h2>Today's Date</h2>
            </div> */}
            <div className='dateDataDiv'>
                    <DirectionsRunIcon sx={{marginRight:'10px',fontSize:'5vw'}}/>
                    <h3 style={{fontSize:'1.5vw'}}>EXERCISE COMPLETED DAYS</h3>
            </div>

            {/*Rows rendering days of the current month */}
              <div className='dateDataCalendarTile'>

                <div className='monthYearDiv'>
                {/*Select Month DropDown */}
              <FormControl className='inputMonthStyle'>
                <Select
                  labelId="month-label"
                  id="month-select"
                  value={selectedMonth}
                  label="Select Month"
                  onChange={handleChangeMonth}
                  sx={{color:'white',outlineColor:'white'}}
                >
                  {Array.from({ length: 12 }, (_, index) => (
                    <MenuItem key={index + 1} value={index + 1}>
                      {new Date(2022, index).toLocaleString('default', { month: 'long' })}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
                {/*Select Year DropDown */}
              <FormControl className='inputMonthStyle'>
                <Select
                  labelId="month-label"
                  id="month-select"
                  value={selectedYear}
                  label="Select Month"
                  onChange={handleChangeYear}
                  sx={{color:'white',outlineColor:'white'}}
                >
                  {Array.from({ length: endYear - startYear + 1 }, (_, index) => (
                    <MenuItem key={startYear + index} value={startYear + index}>
                      {startYear + index}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </div>

              {/*Rendering date/times */}
            <div className='dateDataMapDiv'>
                <div className='dateTimeDataTile'>
                  <div className='pinkDateDiv'>
                    <h2>DATE : 24th Jan,2023</h2>
                  </div>

                  <div className='orangeTimeeDiv'>
                    <h2>TIME : 2:00 PM</h2>
                  </div>
                </div>

                <div className='dateTimeDataTile'>
                  <div className='pinkDateDiv'>
                    <h2>DATE : 24th Jan,2023</h2>
                  </div>

                  <div className='orangeTimeeDiv'>
                    <h2>TIME : 2:00 PM</h2>
                  </div>
                </div>

                <div className='dateTimeDataTile'>
                  <div className='pinkDateDiv'>
                    <h2>DATE : 24th Jan,2023</h2>
                  </div>

                  <div className='orangeTimeeDiv'>
                    <h2>TIME : 2:00 PM</h2>
                  </div>
                </div>

              </div>
            </div>

          </div>

      </div>
    </div>
    </>
    
  )
}

export default CalendarMainPage