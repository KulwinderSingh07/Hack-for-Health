import "../CSS/DashBoardPage.css"
import DietCardComponent from "./dietSuggestorCard";
import ExerciseCardComponent from "./exerciseSuggestorCard";
import OperationsCardComponent from "./pdfUploaderCard";
import ProfileDemo from "../assets/images/profilePickDemo.jpg"
import LineGraphCompoent from "./mainGraphCompoent";
import ControlsComponent from "./controllerCompoent";
import BottomRightCompoent from "./bottomRightCompoent";


const MainDashBoardComponent = () => {
    return (
        <div className="DashBoard">
        <div className="DashBoardWrapper">
            <div className="DashBoardHeader">
                <h1>Dashboard</h1>
                <img src={ProfileDemo}></img>
            </div>
            <div className="OperationCardsWrapper">
                <OperationsCardComponent/>
                <ExerciseCardComponent/>
                <DietCardComponent/>
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