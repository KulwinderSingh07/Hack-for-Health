import "../CSS/DashBoardPage.css"
import DietCardComponent from "./dietSuggestorCard";
import ExerciseCardComponent from "./exerciseSuggestorCard";
import PdfUploaderCardComponent from "./pdfUploaderCard";
import ProfileDemo from "../assets/images/profilePickDemo.jpg"
import LineGraphCompoent from "./mainGraphCompoent";
import ControlsComponent from "./controllerCompoent";
import BottomRightCompoent from "./bottomRightCompoent";
import { useEffect, useState } from "react";
import PopUpCompoent from "./popUpComponent";
import SymptomSelectorCompoent from "./symptomsDropDownCompoent";
import SpeedIcon from '@mui/icons-material/Speed';
import  axios from "axios";

import { useLocation } from 'react-router-dom';

const MainDashBoardComponent = () => {
    const location = useLocation();
    const [openExercise, setOpenExercise] = useState(false)
    const [bodyPartsData,setBodyPartsData] = useState();

    const [selectedButton, setSelectedButton] = useState(-1)

    const [graphData, setGraphData] = useState()
    const [donutData, setDonutData] = useState()

    const [openDiet, setOpenDiet] = useState(false)

    const [symptomsList, setsymptomsList] = useState([])
    const email = location.state?.email || localStorage.getItem("email");

    // if(location.state){
    //     console.log('Location State -> ',location.state);
    // }
    

    const [symptomsPredictionHistory, setSymptomsPredictionHistory] = useState([])
    const [pdfReportData, setPdfReportData] = useState({
        fileName:"",
        creationDate:"",
        userEmail:"",
        FoodItems:[],
        vitalsList:[]})

    const PredictingDiseaseBasedOnSymptoms=async()=>{
        const symptomsData={
            symptoms:symptomsList
        }

        console.log(symptomsList)
        if(symptomsList.length!=0){

            const PredictedData=await axios.post("http://13.127.33.46:4000/",symptomsData)
            console.log(PredictedData.data)
            
            const predictionHistoryDocumentDat={
                predictedDisease:PredictedData.data.disease_prediction,
                userEmail:email,
                Symptoms:symptomsList
            }

            const createdPredictionHistoryDocument=await axios.post("http://localhost:3001/symptomsPrediction/create",predictionHistoryDocumentDat)
            console.log(createdPredictionHistoryDocument)

            if(createdPredictionHistoryDocument.status==200){
                console.log(createdPredictionHistoryDocument.data)
                const credential={
                    email:email
                }
                const fetChedPredictionHistory=await axios.post("http://localhost:3001/symptomsPrediction/getPredictionHistory",credential)
                let sortedData=fetChedPredictionHistory.data.sort((a, b) => new Date(b.predictionTime) - new Date(a.predictionTime));
                setSymptomsPredictionHistory(sortedData)
                setsymptomsList([])
            }
        }
    }
    
    const fetchPredictionHistory=async()=>{
        const credential={
            email:email
        }
        const fetchedHistory=await axios.post("http://localhost:3001/symptomsPrediction/getPredictionHistory",credential)
        // fetchedHistory.data.sort((a, b) => a.predictionTime - b.predictionTime);
        let sortedData=fetchedHistory.data.sort((a, b) => new Date(b.predictionTime) - new Date(a.predictionTime));
        setSymptomsPredictionHistory(sortedData);
    }

    const data="Hello ji"

    const handleExerClickOpen=()=>{
        console.log("opens")
        setOpenExercise(true)
    }
    const endPoints=['','getLastMonthData','getLastThreeMonthData','getLastYearData']

    const handlePatientData=async(data)=>{
        setSelectedButton(data)
        const Incominggraphdata=await axios.get(`http://localhost:3001/vital/${endPoints[data]}`)
        console.log(Incominggraphdata.data)
        setGraphData(Incominggraphdata.data)
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

    useEffect(()=>{
        fetchPredictionHistory()
    },[])

    useEffect(()=>{
        PredictingDiseaseBasedOnSymptoms()
    },[symptomsList])
    
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
                <PdfUploaderCardComponent setPdfReportData={setPdfReportData} setBodyPartsData={setBodyPartsData}/>
                <ExerciseCardComponent  handleExerClickOpen={handleExerClickOpen} bodyPartsData={bodyPartsData} pdfReportData={pdfReportData} title={"Suggested Target Body Parts"}/>
                <PopUpCompoent open={openExercise} setOpen={setOpenExercise} bodyPartsData={bodyPartsData} pdfReportData={pdfReportData} title={"Suggested Target Body Parts"}/>
                <DietCardComponent handleDietClickOpen={handleDietClickOpen}/>
                <PopUpCompoent open={openDiet} setOpen={setOpenDiet} pdfReportData={pdfReportData} title={"Recommended Food Items"}/>
            </div>
            <div className="GraphWrapper">
                <div className="GraphContainerHeader">
                    <h3>Vitals Graph</h3>
                    <h3>Symptoms List</h3>
                </div>
                <div className="MainGraphContainer">
                <LineGraphCompoent graphData={graphData}/>
                <div className="graphControllButtons">
                        {/* <button style={{backgroundColor:selectedButton==0?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(0)
                        }}
                        >LastWeek</button> */}
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
                        {/* <button style={{backgroundColor:selectedButton==4?'#222b5d':'#3c3d43'}}
                        onClick={()=>{
                            handlePatientData(4)
                        }}
                        >LifeTime</button> */}
                    </div>
                <div className="symptomsWrapper">
                    <SymptomSelectorCompoent selectedArea={selectedArea} setSelectedArea={setSelectedArea} setsymptomsList={setsymptomsList}/>
                </div>
                </div>  
            </div>
            <div className="BottomGraphs">
                <ControlsComponent donutData={donutData} pdfReportData={pdfReportData}/>
                <BottomRightCompoent symptomsPredictionHistory={symptomsPredictionHistory}/>
            </div>
        </div>
        </div> 
     );
}
 
export default MainDashBoardComponent;