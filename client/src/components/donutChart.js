import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "../CSS/donutChartCompoent.css"

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      fontColor:'white',
      data: [12, 19, 3, 5, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'white',
        'white',
        'white',
        'white',
        'white',
      ],
      borderWidth: 1.3,
    },
  ],
};


const options = {
  plugins: {
    legend: {
      labels: {
        color: 'white',
      },
      position: 'bottom',
      fullSize:true
    },
  },
}
const DocnutChartCompoent = ({donutData}) => {
  const [dataToDisaply, setDataToDisaply] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: 'No of Votes',
        fontColor:'white',
        data: [12, 19, 3, 5, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 1.3,
      },
    ],
  })
  useEffect(()=>{
    if(donutData!==undefined){
      console.log("Donut")
      const newdata={...donutData}
      setDataToDisaply(newdata)
    }
  },[donutData])
    return (
        <div className='donutWrapper'>  
        {dataToDisaply && <Doughnut className="donutChart"  data={dataToDisaply} options={options}/>}
        </div>
    )
}
 
export default DocnutChartCompoent;