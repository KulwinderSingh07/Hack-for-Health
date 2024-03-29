import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useState } from 'react';
import BarComponent from './barComponent';
import "../CSS/barComponent.css"

const ControlerButtonComponent = ({pdfReportData}) => {
    const [List, setList] = useState([{
        min:2,
        max:10,
        val:8,
        heading:"Values"
    },
    {
        min:5,
        max:100,
        val:45,
        heading:"Mov"
    }])
    return ( 
        <div className='Controlls'>
        <FormGroup>
        {pdfReportData.vitalsList.map((val)=>{
                return(
                    <div className='vitalsContainer'>
                    <div className='vitalsBasicInfo'>Min:{val.lower_limit}</div>
                    <BarComponent data={val}/>
                    <div className='vitalsBasicInfo'>Max:{val.upper_limit}</div>
                    </div>
        )
        })
    }
        </FormGroup>
        </div>
     );
}
 
export default ControlerButtonComponent;