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
import { useEffect, useState } from "react";
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

const LineGraphCompoent = ({graphData}) => {
  const [labels, setlabels] = useState(['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL','AUG','SEP','OCT','NOV','DEC'])

  const [options, setOptions] = useState(
    {
      // bezierCurve : true,
    responsive: true,
    maintainAspectRatio:true,
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 2,
        to: 0,
        loop: false
      }
    },
    interaction: {  
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: 'Overview',
        color:'white'
      },
      legend: {
        labels: {
          color: 'white', // Change the legend item color here
          textAlign:'left'
        },
        position:'top',
      },
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title:{
          text:"Title",
          display:true,
          color:'white',
        },
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
        },
      },
      x:{
        ticks: {
            stepSize:10,
              color: 'white', // set the color of the y-axis ticks to white
          },
          datasets: {
            line: {
                barPercentage: 0.2, // Adjust the width of the bars
                categoryPercentage: 0.6 // Adjust the space between bars
            }
        }
      }   
    },
  }
  )

  const [dataToDispaly, setDataToDispaly] = useState(
    // {
    //   labels,
    //   datasets: [
    //     {
    //       label: 'Dataset 2',
    //       data:[1000,800,-200,-900,-600,6000,400],
    //       borderColor: '#4c71f0',
    //       backgroundColor: '#00d0c2',
    //       yAxisID: 'y1',
    //     },
    //   ],
    // }
  )

  // const handleGraphDataChanges=(toggeledGraphData)=>{
  //   if(toggeledGraphData!==undefined){

  //     console.log(toggeledGraphData)
  //     const newDataVal={
  //       label:toggeledGraphData.label,
  //       data:toggeledGraphData.data,
  //       color:'white',
  //       borderColor: '#4c71f0',
  //       backgroundColor: '#00d0c2',
  //       yAxisID:'y',
  //     }
  //     const tempDataVal= data
  //     tempDataVal.datasets.push(newDataVal)
  //     console.log(tempDataVal)
  //     setData(tempDataVal)
  //   }
  // }

  useEffect(()=>{
    if(graphData!==undefined){
      console.log(graphData)
        // Update the data based on your logic
        // const newData = {
        //   ...dataToDispaly,
        //   datasets: [
        //     {
        //       ...dataToDispaly.datasets[0],
        //       data: dataToDispaly.datasets[0].data
        //     },
        //     {...graphData}
        //   ],
        // };
        setDataToDispaly({
          datasets:graphData
        });
    }else{
      console.log("hello")
    }
  },[graphData])
        return (
          <div className="graph">
            {dataToDispaly &&
            <Line className="graphContainer" options={options} data={dataToDispaly} />
            }
          </div>
        )
        
}
 
export default LineGraphCompoent;