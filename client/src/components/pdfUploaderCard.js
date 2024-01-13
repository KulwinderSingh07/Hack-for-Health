import "../CSS/cardComponents.css"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';


const PdfUploaderCardComponent = () => {
    return ( 
            <div className="Card">
                <div className="cardContent">
            <div className="leftCardPart">
                <h2>UPLOAD REPORT</h2>
                <IconButton
                    // size="large"
                    // onClick={handleDietClickOpen}
                    >
                    <CloudUploadIcon fontSize="large" style={{ color: 'white' }} />
                </IconButton>
                {/* <Typography>Click To Upload</Typography> */}
                <h3>Click Above Icons</h3>
            </div>
            <div className="rightCardPart">
                <div className="cardLogo"><PictureAsPdfIcon fontSize="large"/></div>
            </div>
                </div>
        </div>
     );
}
 
export default PdfUploaderCardComponent;