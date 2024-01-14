import React, { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import { DateObject } from 'react-multi-date-picker';

//CSS
import '../CSS/CalendarMUI.css';

const YourComponent = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());

    console.log(new DateObject().set({day:5}));

    const [values, setValues] = useState([
        [new DateObject().set({ day: 1 }), new DateObject().set({ day: 1 })],
        [new DateObject().set({ day: 6 }), new DateObject().set({ day: 6 })],
        [new DateObject().set({ day: 23 }), new DateObject().set({ day: 27 })],
        [new DateObject().set({month:2,day:2}), new DateObject().set({month:2,day:2})]
      ]);

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
