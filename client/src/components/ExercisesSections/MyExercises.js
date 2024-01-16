import React, { useEffect, useState } from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import CelebrationIcon from '@mui/icons-material/Celebration';
import axios from 'axios';

//CSS
import '../../CSS/MyExercises.css';

//GYM LOCAL DATA
import GymData from '../../data/gymExercises.json';

const MyExercises = ({myExercises}) => {
  // const [GymData,setGymData] = useState([]);
  const email = localStorage.getItem("email");
  const [suggestedBodyParts,setSuggestedBodyParts] = useState(null);
  const [suggestedExercises,setSuggestedExercises] = useState(null);
  const [allCompleted,setAllCompleted] = useState(false);
  const [completionMsg,setCompletionMsg] = useState("");


//Accordian Colors concept:
  const notCompletedColor = 'linear-gradient(to right,#fa6167, #fad0c4)';
  const completedColor = 'linear-gradient(to right,#32b965,white)';


  const fetchGymData = async()=>{
      const res = await axios.post('https://gfg-backend.onrender.com/exercise/fetchMyExercises',{email});
      console.log(res.data.data);

      if(res.data.data == undefined){
        return;
      }

      setSuggestedBodyParts(res.data.data.suggestedBodyParts);
      setSuggestedExercises(res.data.data.suggestedExercises);
  }

  const markExerciseCompleted = async(exerciseName) => {
    const res = await axios.post('https://gfg-backend.onrender.com/exercise/markComplete',{exerciseName,email});
    console.log(res);
    fetchGymData();
    checkIfAllComplete();
  }

  const markExerciseNotCompleted = async(exerciseName) => {
    const res = await axios.post('https://gfg-backend.onrender.com/exercise/markNotComplete',{exerciseName,email});
    console.log(res);
    fetchGymData();
    checkIfAllComplete();
  }

  const removeFromList = async(exerciseName) => {
    const res = await axios.post('https://gfg-backend.onrender.com/exercise/removeFromList',{exerciseName,email});
    console.log(res);
    fetchGymData();
    checkIfAllComplete();
  }

  const checkIfAllComplete = async() =>{
    const res = await axios.post('https://gfg-backend.onrender.com/exercise/checkIfAllComplete',{email});
    console.log(res);
    setAllCompleted(res.data.done);

      //DATE LOGIC DAY/MONTH/YEAR
      let objectDate = new Date();
      let day = objectDate.getDate();
      let month = objectDate.getMonth();
      let year = objectDate.getFullYear();
    if(res.data.done == true){
      const res = await axios.post('https://gfg-backend.onrender.com/calendar/addCalendarDate',{email,day,month:month+1,year});
      console.log(res);
      setCompletionMsg("Congratulations, all exercises completed for the day");
    }else{
      const res = await axios.post('https://gfg-backend.onrender.com/calendar/deleteCalendarDate',{email,day,month:month+1,year});
      console.log(res);
      setCompletionMsg("");
    }

  }

  useEffect(()=>{
      fetchGymData();
      checkIfAllComplete();
  },[])

  useEffect(()=>{
    fetchGymData();
  },[myExercises])
  

  return (
    <>
    <div className='myExercises'>
        <div className='exercisesSuggestionHeader'>
        <AccessibilityNewIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>YOUR EXERCISE LIST</h3>
        </div>

        <h2 style={{color:'white'}}>Suggested Body Parts for exercise based on previous report upload are :</h2>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          {
            suggestedBodyParts!=null?suggestedBodyParts.map((item)=>{
              return (<h2 style={{padding:'5px',backgroundColor:'orange',color:'white',borderRadius:'10px'}}>{item}</h2>);
            }) : <></>
          }
        </div>
        

        {/*My Exercises Rendering below*/}
        <div className='myExercisesMap'>
        {
          suggestedExercises?suggestedExercises.map((exercise,indexMain)=>{
            return (
              <>
              <Accordion className='accordianMaterialUi' sx={{backgroundImage:exercise[1].done?completedColor:notCompletedColor,marginTop:'0.5vw',marginBottom:'0.5vw'}}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon />
                }
                  aria-controls={`panel${indexMain+1}-content`}
                  id={`panel${indexMain+1}-header`}

                  sx={{fontSize:'0.5vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}
                >
                  <h1 style={{color:'white'}}>{exercise[0].name.toUpperCase()}</h1>

                </AccordionSummary>

                <AccordionDetails>
                <div className='exerciseCardDiv'>
                  
                  <img src={exercise[0].gifUrl} style={{height:'30vh'}}/>
                  <div className='exerciseInfoDiv'>
                    <h2>Exercise Name : </h2>
                    <p>{exercise[0].name.toUpperCase()}</p>

                    <h2>Equipment Needed: </h2>
                    <p>{exercise[0].equipment.toUpperCase()}</p>

                    <h2>Body Part : </h2>
                    <p>{exercise[0].bodyPart.toUpperCase()}</p>

                    <h2>Instructions :</h2>
                    <div className='stepsDiv'>
                      {exercise[0].instructions.map((item,index)=>{
                          return <p>{index+1}. {item}</p>;
                        })}
                    </div>
                      

                    <h2>Target Muscles : </h2>
                    <p>{exercise[0].target.toUpperCase()}</p>

                    <h2>Secondary Engaged Muscles :</h2>
                    {exercise[0].secondaryMuscles.map((item)=>{
                      return <p>{item.toUpperCase()}</p>
                    })}

                  </div>
                </div>
                </AccordionDetails>

                <div className='exerciseMarkingButtonsDiv'>
                    <div onClick={()=>{markExerciseCompleted(exercise[0].name)}} className='completedCheckDiv'>
                      <ThumbUpAltIcon sx={{marginRight:'10px'}}/>
                      <h3>Mark exercise as Completed</h3>
                    </div>
                    <div onClick={()=>{markExerciseNotCompleted(exercise[0].name)}} className='notCompletedCheckDiv'>
                      <CancelIcon sx={{marginRight:'10px'}}/>
                      <h3>Mark exercise as not Completed</h3>
                    </div>
                    <div onClick={()=>{removeFromList(exercise[0].name)}} className='removeExerciseDiv'>
                      <DeleteOutlineIcon sx={{marginRight:'10px'}}/>
                      <h3>Remove exercise</h3>
                    </div>
                    
                  </div>
              </Accordion>
                
              </>
            );
          }):<></>
        }
        </div>

        {/* <div onClick={()=>{markDone()}} className='removeExerciseDiv' style={{marginLeft:'2.5vw',marginRight:'2.5vw',backgroundColor:'#0067ff',borderColor:'#244eae'}}>
            <FileDownloadDoneIcon sx={{marginRight:'10px'}}/>
            <h3>Mark exercises done for the day</h3>
        </div> */}

        {allCompleted ?
        <div style={{padding:'1vw',color:'white',display:'flex',justifyContent:'center',alignContent:'center',fontSize:'1vw',margin:'1vw'}}>
        <h3>{completionMsg}</h3>
        <CelebrationIcon/>
        </div> : <></>
        }
        </div>
    </>
  )
}

export default MyExercises