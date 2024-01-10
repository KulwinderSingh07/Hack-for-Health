import "../CSS/cardComponents.css"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';const ExerciseCardComponent = () => {
    return ( 
            <div className="Card exerciseCard">
                <div className="cardContent">
            <div className="leftCardPart">
                <h3>Total Patients</h3>
                <h1>61,923</h1>
                <h3>Total patient Admitted:32,303</h3>
            </div>
            <div className="rightCardPart">
                <div className="cardLogo"><FitnessCenterIcon fontSize="large"/></div>
            </div>
                </div>
        </div>
     );
}
 
export default ExerciseCardComponent;