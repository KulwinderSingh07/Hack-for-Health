import "../CSS/graphCompoent.css"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    bezierCurve : true,
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Overview',
      color:'white'
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      ticks: {
        color: 'white', // set the color of the y-axis ticks to white
    }
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: 'white', // set the color of the y-axis ticks to white
    }
    },
    x:{
        ticks: {
            color: 'white', // set the color of the y-axis ticks to white
        }
    }   
  },
};

const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      color:'white',
      data:[-1000,200,-600,-200,800,-1000,900,250,300,450,-300,1200],
      borderColor: '#00d0c2',
      backgroundColor: '#4c71f0',
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data:[1000,800,-200,-900,-600,6000,400],
      borderColor: '#4c71f0',
      backgroundColor: '#00d0c2',
      yAxisID: 'y1',
    },
  ],
};

const LineGraphCompoent = () => {
        return <Line className="graphContainer" options={options} data={data} />;
}
 
export default LineGraphCompoent;