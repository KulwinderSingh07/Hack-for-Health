import "../CSS/cardComponents.css"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import  axios from "axios";


const PdfUploaderCardComponent = () => {
    const [file, setFile] = useState(undefined)
    const uploadReport=async (e)=>{
        e.preventDefault();
        console.log(file)
        const formData= new FormData()
        formData.append('pdf_file',file);
        console.log(formData)
        const resp=await axios.post("http://localhost:4001/extract",formData)
        console.log(resp.data)
    }
    return ( 
            <div className="Card">
                <div className="cardContent">
            <div className="leftCardPart">
                <h2>UPLOAD REPORT</h2>
                <label className="inputLabel" style=    {{background:file!=undefined?'#5cc75c':'#00d0c2'}}>
                    <input type="file" className="fileUploader" onChange={(e)=>{
                        setFile(e.target.files[0])
                    }}/>
                    {file==undefined?"Select a file":"Selected"}
                </label>
                <IconButton
                    // size="large"
                    onClick={(e)=>{
                        uploadReport(e)
                    }}
                    >
                <CloudUploadIcon fontSize="large" style={{ color: 'white' }} />
                Click
                </IconButton>
                {/* <Typography>Click To Upload</Typography> */}
                {/* <h3>Click Above Icons</h3> */}
            </div>
            <div className="rightCardPart">
                <div className="cardLogo"><PictureAsPdfIcon fontSize="large"/></div>
            </div>
                </div>
        </div>
     );
}
 
export default PdfUploaderCardComponent;