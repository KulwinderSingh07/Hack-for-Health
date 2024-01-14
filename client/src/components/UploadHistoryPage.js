import React from 'react'

//MATERIAL UI IMPORTS
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { IconButton } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { useState } from 'react';
import { Typography } from "@mui/material";

//CSS
import '../CSS/UploadHistoryPage.css';
import HistoryPopUpCompoent from './popUpForHistory';


const UploadHistoryPage = () => {
  const [openPopUp, setOpenPopUp] = useState(-1)
  const data="hello ji"

  const ListData=[
    {
        val:"Inbox",
        date:new Date().toDateString(),
        output:"Ill"
      },
      {
        val:"Number",
        date:new Date().toDateString(),
        output:"Ill"
      },
      {
        val:"Window",
        date:new Date().toDateString(),
        output:"Ill"
      },
      {
        val:"HEllo",
        date:new Date().toDateString(),
        output:"Ill"
      },
      {
        val:"HEllo",
        date:new Date().toDateString(),
        output:"Ill"
      },
      {
        val:"HEllo",
        date:new Date().toDateString(),
        output:"Ill"
      },
      {
        val:"HEllo",
        date:new Date().toDateString(),
        output:"Ill"
      }
  ]

  const handleClick = (index) => {
    console.log(index)
    if(index==openPopUp){
      setOpenPopUp(-1)
    }else{
      setOpenPopUp(index);
    }
  };


  return (
    <>
    <div className='uploadHistoryPageMainDiv'>
        {/*Imported Header*/}
        <div className='exercisesSuggestionHeader'>
            <PictureAsPdfIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>FILE UPLOAD HISTORY</h3>
        </div>

        <div className='reportHistoryHeading'>
          <div>Download</div>
          <div>PDF Name</div>
          <div>Date/Time</div>
          {/* <div>Download Button</div> */}
          <div>Report Output</div>
        </div>

        <div className='ReportHistoryDrop'>
    <List
    className='listWrapper'
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
        {ListData.map((ele,index)=>{
            return(
                <div>
      <ListItemButton
      className='listItem'
      sx={{marginBottom:"1vh", borderRadius:"1rem",background:"CE16EC",background:"linear-gradient(225deg, #CE16EC, #4F7EF2)",":hover":{backgroundColor:"#4156ca"}}}
      >
        <div className='listItemWrapper'>
          <div className='listItemObject'>
        <IconButton className='iconForDownload'>
          <FileDownloadIcon style={{color:"white"}} fontSize='medium'/>
        </IconButton>
          </div>
        <Typography  className='listItemObject' sx={{fontSize:"large",fontWeight:"bold"}}>{ele.val}</Typography>
        <Typography className='listItemObject'  sx={{fontSize:"large",fontWeight:"bold"}}>{ele.date}</Typography>
        <div className='popUpOutput listItemObject'>
          <Typography  sx={{fontSize:"large",fontWeight:"bold" }}>{ele.output}</Typography>      
        <IconButton
        onClick={()=>{
          handleClick(index)
        }}
        >
          <OpenInFullIcon fontSize='medium'/>
        </IconButton>
        </div>
        </div>
      </ListItemButton>
      <HistoryPopUpCompoent data={data} open={openPopUp} index={index} setOpenPopUp={setOpenPopUp}/>
                </div>
            )
        })}
    </List>
  </div>
    
    </div>
    </>
  )
}

export default UploadHistoryPage