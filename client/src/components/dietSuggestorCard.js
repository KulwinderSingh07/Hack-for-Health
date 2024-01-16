import "../CSS/cardComponents.css"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import IconButton from '@mui/material/IconButton';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import { useState } from "react";
const DietCardComponent = ({handleDietClickOpen}) => {
    return ( 
            <div className="Card dietCard">
                <div className="cardContent">
            <div className="leftCardPart">
                <h3>Dietory Recommended</h3>
                <div className="popUpControl">
                <IconButton
                    // size="large"
                    onClick={handleDietClickOpen}
                    >
                    <OpenInNewIcon fontSize="large" style={{ color: 'white' }} />
                </IconButton>
                <h3>Click to Expand</h3>
                    </div>
                {/* <h3>Total Number of Diet Items:12</h3> */}
            </div>
            <div className="rightCardPart">
                <div className="cardLogo"><FoodBankIcon fontSize="large"/></div>
            </div>
                </div>
        </div>
     );
}
 
export default DietCardComponent;