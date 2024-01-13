import "../CSS/cardComponents.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';

import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { useState } from "react";
const ExerciseCardComponent = ({handleExerClickOpen}) => {
    return ( 
            <div className="Card exerciseCard">
                <div className="cardContent">
            <div className="leftCardPart">
                <h3>Total Patients</h3>
                <div className="popUpControl">
                <IconButton
                    // size="large"
                    onClick={handleExerClickOpen}
                    >
                    <OpenInNewIcon fontSize="large" style={{ color: 'white' }} />
                </IconButton>
                {/* <div>Click to Expand</div> */}
                    </div>
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