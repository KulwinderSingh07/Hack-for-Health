import React, { useState } from 'react';
import { Calendar } from 'react-multi-date-picker';
import { DateObject } from 'react-multi-date-picker';

const YourComponent = () => {
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
        style={{transform:'scale(1.5)',margin:'100px'}}
        value={values}
        multiple
        range
        readOnly
        />
  );
};

export default YourComponent;
