import "../CSS/controlerCompoent.css"
import ControlerButtonComponent from "./controlerButtonComponent";
import DocnutChartCompoent from "./donutChart";
const ControlsComponent = () => {
    return ( 
        <div className="controlerWrapper">
            <div className="controlerContainer">
            <div className="leftControlerPart">
                <h3>Hospital Performance</h3>
                <div className="donutContianer">
                <DocnutChartCompoent/>
                </div>
            </div>
            <div className="rightControlerPart">
                <h3>Doctor Treatment Plan</h3>
                <ControlerButtonComponent/>
            </div>
            </div>
        </div>
     );
}
 
export default ControlsComponent;