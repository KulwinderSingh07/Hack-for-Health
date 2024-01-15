import React, { useEffect, useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import { DateObject } from 'react-multi-date-picker';
import axios from 'axios';

//CSS
import '../CSS/CalendarMUI.css';

const YourComponent = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());

    console.log(new DateObject().set({day:5}));

    const [values, setValues] = useState([
        [new DateObject().set({ day: 1 }), new DateObject().set({ day: 1 })],
        [new DateObject().set({ day: 6 }), new DateObject().set({ day: 6 })],
        [new DateObject().set({ day: 23 }), new DateObject().set({ day: 27 })],
        [new DateObject().set({year:2023,month:12,day:2}), new DateObject().set({year:2023,month:12,day:2})]
      ]);


    const fetchFromApi = async()=>{
      const res = await axios.post('http://localhost:3001/calendar/fetchCalendarDates',{email:'simar'});
      console.log(res);
      const array = res.data.data.dates;

      if(res.msg == "user currently has no dates"){
        return;
      }
      
      let newArray=[];
      for(let i=0;i<array.length;i++){
          newArray.push([new DateObject().set({day:array[i][0],month:array[i][1],year:array[i][2]}),new DateObject().set({day:array[i][0],month:array[i][1],year:array[i][2]})]);
      }

      setValues(newArray);
    }

    useEffect(()=>{
      fetchFromApi();
    },[])

  return (
      <Calendar
        className='calendarStyle'
        value={values}
        multiple
        range
        readOnly
        />
  );
};

export default YourComponent;
