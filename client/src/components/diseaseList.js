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
const DiseaseListCompoent = () => {
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

  return (
    <div className='diseaseDrop'>
    <List
      sx={{ width: '100%', bgcolor: '#222b5d', color:'background.paper', borderRadius:'1rem' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" sx={{borderRadius:'1rem',bgcolor: '#222b5d',color:'background.paper'}}>
        Diseases
        </ListSubheader>
      }
    >
        {ListData.map((ele,index)=>{
            return(
                <div>
      <ListItemButton onClick={()=>{
        handleClick(index)
      }}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary={ele.val} />
        {open==index ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open==index} timeout="auto" unmountOnExit>
        {/* <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List> */}
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
        <Typography  sx={{ pl: 10 }} >HEllo</Typography>
      </Collapse>
                </div>
            )
        })}
    </List>
  </div>
  );
}

export default DiseaseListCompoent;