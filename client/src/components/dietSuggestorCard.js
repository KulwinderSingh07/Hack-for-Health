import "../CSS/cardComponents.css"
import FoodBankIcon from '@mui/icons-material/FoodBank';const DietCardComponent = () => {
    return ( 
            <div className="Card dietCard">
                <div className="cardContent">
            <div className="leftCardPart">
                <h3>Total Patients</h3>
                <h1>61,923</h1>
                <h3>Total patient Admitted:32,303</h3>
            </div>
            <div className="rightCardPart">
                <div className="cardLogo"><FoodBankIcon fontSize="large"/></div>
            </div>
                </div>
        </div>
     );
}
 
export default DietCardComponent;