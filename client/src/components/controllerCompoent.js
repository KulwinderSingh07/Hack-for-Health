import "../CSS/controlerCompoent.css"
import ControlerButtonComponent from "./controlerButtonComponent";
import DocnutChartCompoent from "./donutChart";
const ControlsComponent = ({donutData,pdfReportData})=> {
    return ( 
        <div className="controlerWrapper">
            <div className="controlerContainer">
            {/* <div className="leftControlerPart">
                <h3>Hospital Performance</h3>   
                <div className="donutContianer">
                <DocnutChartCompoent donutData={donutData}/>
                </div>
            </div> */}
            <div className="rightControlerPart">
                <h3>Vital Readings</h3>
                <ControlerButtonComponent pdfReportData={pdfReportData} />
            </div>
            </div>
        </div>
     );
}
 
export default ControlsComponent;