import React, { useEffect } from 'react'
import Sidebar from './Sidebar';

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
import axios from 'axios';


const UploadHistoryPage = () => {
  const [openPopUp, setOpenPopUp] = useState(-1)
  const [reportHistoryPDFList, setReportHistoryPDFList] = useState([])
  const email = localStorage.getItem("email");

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

  function getCurrentTimeString(date) {
    const currentDate = new Date(date);
    const hours = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');
    const seconds = currentDate.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const handleClick = (index) => {
    console.log(index)
    if(index==openPopUp){
      setOpenPopUp(-1)
    }else{
      setOpenPopUp(index);
    }
  };

  const FetchHistory=async()=>{
    const credentials={
      email:email
    }
    const historyData=await axios.post("http://localhost:3001/pdfHistory/fetchPdfHistory",credentials)
    console.log(historyData.data)
    setReportHistoryPDFList(historyData.data)
  }

  useEffect(()=>{
    FetchHistory()
  },[])

  return (
    <>
        <Sidebar/>
    <div className='uploadHistoryPageMainDiv'>
        {/*Imported Header*/}
        <div className='exercisesSuggestionHeader'>
            <PictureAsPdfIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>FILE UPLOAD HISTORY</h3>
        </div>

        <div className='reportHistoryHeading'>
          {/* <div>Download</div> */}
          <div>PDF Name</div>
          <div>Date/Time</div>
          {/* <div>Download Button</div> */}
          <div>Report Output</div>
        </div>

        <div className='ReportHistoryDrop'>
   {

     <List
     className='listWrapper'
     component="nav"
     aria-labelledby="nested-list-subheader"
     >
        {reportHistoryPDFList.map((ele,index)=>{
          return(
                <div>
      <ListItemButton
      className='listItem'
      sx={{marginBottom:"1vh", borderRadius:"1rem",background:"CE16EC",background:"linear-gradient(225deg, #0067ff, #6e95f5)",":hover":{backgroundColor:"#4156ca"}}}
      >
        <div className='listItemWrapper'>
        <Typography  className='listItemObject' sx={{fontSize:"large",fontWeight:"bold",color:'white'}}>{ele.fileName}</Typography>
        <Typography className='listItemObject'  sx={{fontSize:"medium",fontWeight:"bold",color:'white'}}>{new Date(ele.creationDate).toDateString()}/{getCurrentTimeString(ele.creationDate)}</Typography>
        <div className='popUpOutput listItemObject'>
        <IconButton
        onClick={()=>{
          handleClick(index)
        }}
        >
          <OpenInFullIcon sx={{color:'white'}} fontSize='medium'/>
        </IconButton>
        </div>
        </div>
      </ListItemButton>
      <HistoryPopUpCompoent data={ele} open={openPopUp} index={index} setOpenPopUp={setOpenPopUp}/>
                </div>
            )
          })}
    </List>
}
  </div>
    
    </div>
    </>
  )
}

export default UploadHistoryPage