import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from "@mui/material";
import { useState } from 'react';
import BarComponent from './barComponent';
import "../CSS/barComponent.css"

const ControlerButtonComponent = () => {
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
        {List.map((val)=>{
                return(
                    <BarComponent data={val}/>
        )
        })
    }
        </FormGroup>
        </div>
     );
}
 
export default ControlerButtonComponent;