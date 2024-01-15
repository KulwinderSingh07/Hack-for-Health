import "../CSS/graphForBottom.css"
import DiseaseListCompoent from "./diseaseList";
const BottomRightCompoent = ({symptomsPredictionHistory}) => {
    return ( 
        <div className="graphForBottom">
            {/* <h3>Man Power per Division</h3> */}
            <DiseaseListCompoent symptomsPredictionHistory={symptomsPredictionHistory}/>
        </div>
     );
}
 
export default BottomRightCompoent;