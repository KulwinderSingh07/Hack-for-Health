import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "../CSS/donutChartCompoent.css"

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const sliceThicknessPlugin = {
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      console.log(chart)
      const slices = chart.data.datasets[0].data;
      const radius = chart.outerRadius;
  
      slices.forEach((value, index) => {
        const arc = chart.getDatasetMeta(0).data[index];
        const sliceThickness = (value / slices.reduce((a, b) => a + b, 0)) * 0.1; // Adjust the multiplier for thickness
  
        arc._model.innerRadius = radius * sliceThickness;
      });
    },
  };

const options = {
    plugins: {
      beforeDraw: (chart, options, context) => {
        sliceThicknessPlugin.beforeDraw(chart, options, context);
      },
    },
  };
const DocnutChartCompoent = () => {
    return (
        <div >
        <Doughnut className="donutChart"  data={data} options={options}/>
        </div>
    )
}
 
export default DocnutChartCompoent;