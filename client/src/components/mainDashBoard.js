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


const MainDashBoardComponent = () => {
    const [openExercise, setOpenExercise] = useState(false)

    const [openDiet, setOpenDiet] = useState(false)
    const data="Hello ji"

    const handleExerClickOpen=()=>{
        console.log("opens")
        setOpenExercise(true)
    }

    const handleDietClickOpen=()=>{
        setOpenDiet(true)
    }
    
    return (
        <div className="DashBoard">
        <div className="DashBoardWrapper">
            <div className="DashBoardHeader">
                <h1>Dashboard</h1>
                <img src={ProfileDemo}></img>
            </div>
            <div className="OperationCardsWrapper">
                <PdfUploaderCardComponent/>
                <ExerciseCardComponent  handleExerClickOpen={handleExerClickOpen}/>
                <PopUpCompoent open={openExercise} setOpen={setOpenExercise} data={data}/>
                <DietCardComponent handleDietClickOpen={handleDietClickOpen}/>
                <PopUpCompoent open={openDiet} setOpen={setOpenDiet} data={data}/>
            </div>
            <div className="GraphWrapper">
                <LineGraphCompoent/>
            </div>
            <div className="BottomGraphs">
                <ControlsComponent/>
                <BottomRightCompoent/>
            </div>
        </div>
        </div> 
     );
}
 
export default MainDashBoardComponent;