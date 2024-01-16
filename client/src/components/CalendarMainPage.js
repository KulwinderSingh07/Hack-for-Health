import React, { useEffect } from 'react';
import CalendarMUI from './CalendarMUI';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import { useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

//CSS
import '../CSS/CalendarMainPage.css';

//MATERIAL UI
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

const CalendarMainPage = () => {
  const [values,setValues] = useState([]);
  const email = localStorage.getItem("email");

  const apiFetch = async() =>{
      const res = await axios.post('http://localhost:3001/calendar/fetchCalendarDates',{email:email});
      console.log(res);
      if(res.data.msg == "user currently has no dates"){
        return;
      }

      const array = res.data.data.dates;
      
      
      let newArray=[];
      for(let i=0;i<array.length;i++){
        newArray.push(array[i]);
      }

      const reversedArray = newArray.reverse();

      setValues(reversedArray);
  }

  useEffect(()=>{
    apiFetch();
  },[])

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

              {/*Rendering date/times */}
            <div className='dateDataMapDiv'>

              {
                values.map((item)=>{
                  return (
                  <div className='dateTimeDataTile'>
                  <div className='pinkDateDiv'>
                    <h2>DATE : {item[0].toString()}/{item[1].toString()}/{item[2].toString()}</h2>
                  </div>

                  <div className='orangeTimeeDiv'>
                    <h2>TIME : {item[3]}</h2>
                  </div>
                </div>);
                })
              }
                

              </div>
            </div>

          </div>

      </div>
    </div>
    </>
    
  )
}

export default CalendarMainPage