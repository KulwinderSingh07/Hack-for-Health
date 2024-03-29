import "../CSS/cardComponents.css"
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";
import  axios from "axios";


const PdfUploaderCardComponent = ({setPdfReportData,setBodyPartsData}) => {
    const [file, setFile] = useState(undefined)
    const email = localStorage.getItem("email");

    const uploadReport=async (e)=>{
        e.preventDefault();

        if(file == undefined) return;

        console.log(file.name)
        const formData= new FormData()
        formData.append('pdf_file',file);
        console.log(formData)
        const resp=await axios.post("http://3.109.238.31:4001/extract",formData)
        console.log('resp.data',resp.data)
        
        setBodyPartsData(resp.data);

        const dataForSending={
            fileName:file.name,
            email:email,
            vitalData:resp.data
        }
        const reportDocument=await axios.post("https://gfg-backend.onrender.com/pdfHistory/create",dataForSending)
        console.log(reportDocument.data)
        setPdfReportData(reportDocument.data)
    }
    return ( 
            <div className="Card">
                <div className="cardContent">
            <div className="leftCardPart">
                <h2 style={{marginTop:'0vw',marginBottom:'0.5vw'}}>UPLOAD REPORT</h2>
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