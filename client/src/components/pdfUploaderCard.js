import "../CSS/cardComponents.css"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const OperationsCardComponent = () => {
    return ( 
            <div className="Card">
                <div className="cardContent">
            <div className="leftCardPart">
                <h2>UPLOAD REPORT</h2>
                <h1>61,923</h1>
                <h3>Total patient Admitted:32,303</h3>
            </div>
            <div className="rightCardPart">
                <div className="cardLogo"><PictureAsPdfIcon fontSize="large"/></div>
            </div>
                </div>
        </div>
     );
}
 
export default OperationsCardComponent;