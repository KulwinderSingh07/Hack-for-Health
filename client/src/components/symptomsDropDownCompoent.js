import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useEffect, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Typography } from "@mui/material";
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import CircleIcon from '@mui/icons-material/Circle';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import "../CSS/symptomsDropDownComponent.css"

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const ListOfSymptoms=  [
    {
        SymptomName:"sweating",
        checkBoxSelected:false
    },
    {
        SymptomName:"chest_pain",
        checkBoxSelected:false
    },
    {
        SymptomName:"breathlessness",
        checkBoxSelected:false
    }
]


  const SymptomSelectorCompoent=({setSelectedArea,selectedArea,setsymptomsList})=> {
    console.log(selectedArea)
    const [selectedSymptoms, setSelectedSymptoms] = useState([])
    
    const handleOnSelect = (value) => {
        let newTemp=selectedSymptoms
        let index=newTemp.indexOf(value)
        if(index!==-1){
          const updatedList = selectedSymptoms.filter(item => item !== value);
          setSelectedSymptoms(updatedList);
        }else{
          const upadetedList = [...selectedSymptoms, value];
          setSelectedSymptoms(upadetedList);
        }
      };

        function formatString(inputString) {
    const stringWithSpaces = inputString.replace(/_/g, ' ');

    // Split the string into words using spaces as separators
    const words = stringWithSpaces.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the words back together with spaces
    const formattedString = capitalizedWords.join(' ');

    return formattedString;
}

      const submitSymptoms=(e)=>{
        // e.preventDefault()
        console.log(selectedSymptoms)
        setsymptomsList(selectedSymptoms)
      }
  return (
    <>
   <div className='symptonsListContainer'>
   <List
      sx={{ width: '100%', bgcolor: '#222b5d', color:'background.paper', borderRadius:'1rem' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{borderRadius:'1rem',bgcolor: '#222b5d',color:'background.paper'}}>
        Select your Symptoms
        </ListSubheader>
      }
    >
        {ListOfSymptoms.map((ele,index)=>{
            return(
                <div>
      <ListItemButton>
        <FormControlLabel
          value={ele.SymptomName}
          control={<Checkbox 
            onClick={()=>{
              handleOnSelect(ele.SymptomName)
            }}
            icon={<PanoramaFishEyeIcon style={{color:"white"}}/>}
             checkedIcon={<CircleIcon />}
          />}
          label={formatString(ele.SymptomName)}
          labelPlacement="End"
        />
      </ListItemButton>
                </div>
            )
        })}
    </List>
   </div>
   <div className='symptomsSubmitButton'>
    <button onClick={(e)=>{
        submitSymptoms(e)
    }}>Submit</button>
   </div>
    </>
  );
}
export default SymptomSelectorCompoent;