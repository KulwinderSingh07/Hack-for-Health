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
import { useState } from 'react';
import { Typography } from "@mui/material";

import "../CSS/diseaseDropCompoent.css"
const DiseaseListCompoent = ({symptomsPredictionHistory}) => {
  const [open, setOpen] = useState(-1);

  const ListData=[
    {
        val:"Inbox"
    },
    {
        val:"Number"
    },
    {
        val:"Window"
    },
    {
        val:"HEllo"
    },
    {
        val:"HEllo"
    },
    {
        val:"HEllo"
    },
    {
        val:"HEllo"
    }
  ]

  const handleClick = (index) => {
    console.log(index)
    if(index==open){
        setOpen(-1)
    }else{
        setOpen(index);
    }
  };

  function getCurrentTimeString(date) {
    const currentDate = new Date(date);
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

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

  function getSymptomsList(arr){
    let val="[ "
    for(let i=0;i<arr.length;i++){
      let modifiedString=formatString(arr[i])
      if(i<arr.length-1){
        val=val+modifiedString+" , "
      }else{
        val=val+modifiedString
      }
    }
    val+=' ]'
    return val
  }


  return (
    <div className='diseaseDrop'>
    <List
      sx={{ width: '100%', bgcolor: '#222b5d', color:'background.paper', borderRadius:'1rem' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{borderRadius:'1rem',bgcolor: '#222b5d',color:'background.paper'}}>
        Diseases Predicted History
        </ListSubheader>
      }
    >
        {symptomsPredictionHistory.map((ele,index)=>{
            return(
                <div>
      <ListItemButton onClick={()=>{
        handleClick(index)
      }}>
        <ListItemText primary={new Date(ele.predictionTime).toDateString()} />
        <ListItemText primary={getCurrentTimeString(ele.predictionTime)} />
        <ListItemText primary={ele.predictedDisease} />
        {open==index ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open==index} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
        <ListItemText primary={"Symptoms"} />
        <ListItemText primary={getSymptomsList(ele.Symptoms)} />
          </ListItemButton>
        </List>
      </Collapse>
                </div>
            )
        })}
    </List>
  </div>
  );
}

export default DiseaseListCompoent;