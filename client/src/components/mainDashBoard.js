import "../CSS/DashBoardPage.css"
import DietCardComponent from "./dietSuggestorCard";
import ExerciseCardComponent from "./exerciseSuggestorCard";
import PdfUploaderCardComponent from "./pdfUploaderCard";
import ProfileDemo from "../assets/images/profilePickDemo.jpg"
import LineGraphCompoent from "./mainGraphCompoent";
import ControlsComponent from "./controllerCompoent";
import BottomRightCompoent from "./bottomRightCompoent";
import { useState } from "react";
import PopUpCompoent from "./popUpComponent";
import SymptomSelectorCompoent from "./symptomsDropDownCompoent";
import SpeedIcon from '@mui/icons-material/Speed';


const MainDashBoardComponent = () => {
    const [openExercise, setOpenExercise] = useState(false)

    const [selectedButton, setSelectedButton] = useState(3)

    const [graphData, setGraphData] = useState()
    const [donutData, setDonutData] = useState()

    const [openDiet, setOpenDiet] = useState(false)
    const data="Hello ji"

    const handleExerClickOpen=()=>{
        console.log("opens")
        setOpenExercise(true)
    }

    const handlePatientData=(data)=>{
        setSelectedButton(data)
        console.log("Hello")
        setGraphData(
            {data:[
            {x:'JAN',y:'-1000'},
            {x:'FEB',y:'-300'},
            {x:'MAR',y:'-200'},
            ],
            label:'DataSet 3',
            color:'white',
            borderColor: '#4c71f0',
            backgroundColor: '#00d0c2',
            yAxisID:'y'
        }
        )
        
        setDonutData(
            {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [
                  {
                    label: '# of Votes',
                    fontColor:'white',
                    data: [12, 19, 3, 5,34, 3],
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
              }
        )
    }

    const [selectedArea, setSelectedArea] = useState(
        [
            {
                junctionName:"Symton 1",
                checkBoxSelected:false
            },
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            },
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            }
            ,
            ,
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            },
            ,
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            },
            ,
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            },
            ,
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            },
            ,
            {
                junctionName:"Symton 2",
                checkBoxSelected:false
            },

        ]
    )



    
    const handleDietClickOpen=()=>{
        setOpenDiet(true)
    }
    
    return (
        <div className="DashBoard">
            <div className='exercisesSuggestionHeader'>
                <SpeedIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>DASHBOARD</h3>
                </div>

            <div className="DashBoardWrapper">
                {/* <div className="DashBoardHeader">
                    <h1>Dashboard</h1>
                    <img src={ProfileDemo}></img>
                </div> */}
                

            <div className="OperationCardsWrapper">
                <PdfUploaderCardComponent/>
                <ExerciseCardComponent  handleExerClickOpen={handleExerClickOpen}/>
                <PopUpCompoent open={openExercise} setOpen={setOpenExercise} data={data}/>
                <DietCardComponent handleDietClickOpen={handleDietClickOpen}/>
                <PopUpCompoent open={openDiet} setOpen={setOpenDiet} data={data}/>
            </div>
            <div className="GraphWrapper">
                <div className="GraphContainerHeader">
                    <h3>Vitals Graph</h3>
                    <h3>Symptoms List</h3>
                </div>
                <div className="MainGraphContainer">
                <LineGraphCompoent graphData={graphData}/>
                <div className="graphControllButtons">
                        <button style={{backgroundColor:selectedButton==0?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(0)
                        }}
                        >LastWeek</button>
                        <button style={{backgroundColor:selectedButton==1?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(1)
                        }}
                        >LastMonth</button>
                        <button style={{backgroundColor:selectedButton==2?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(2)
                        }}
                        >3 Months</button>
                        <button style={{backgroundColor:selectedButton==3?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(3)
                        }}
                        >Yearly</button>
                        <button style={{backgroundColor:selectedButton==4?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(4)
                        }}
                        >LifeTime</button>
                    </div>
                <div className="symptomsWrapper">
                    <SymptomSelectorCompoent selectedArea={selectedArea} setSelectedArea={setSelectedArea}/>
                </div>
                </div>  
            </div>
            <div className="BottomGraphs">
                <ControlsComponent donutData={donutData}/>
                <BottomRightCompoent />
            </div>
        </div>
        </div> 
     );
}
 
export default MainDashBoardComponent;