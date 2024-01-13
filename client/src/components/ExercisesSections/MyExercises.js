import React from 'react'
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

//CSS
import '../../CSS/MyExercises.css';

//GYM LOCAL DATA
import GymData from '../../data/gymExercises.json';

const MyExercises = () => {

//Accordian Colors concept:
  const notCompletedColor = 'linear-gradient(to right, #ff9a9e, #fad0c4)';
  const completedColor = 'linear-gradient(to right,#aef359,white)';

  return (
    <>
    <div className='myExercises'>
        <div className='exercisesSuggestionHeader'>
        <AccessibilityNewIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>SUGGESTED EXERCISES BASED ON LAST REPORT UPLOAD</h3>
        </div>

        {/*My Exercises Rendering below*/}
        <div className='myExercisesMap'>
        {
          GymData.map((exercise,indexMain)=>{
            return (
              <>
              <Accordion className='accordianMaterialUi' sx={{backgroundImage:exercise.completed?completedColor:notCompletedColor,marginTop:'0.5vw',marginBottom:'0.5vw'}}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon />
                }
                  aria-controls={`panel${indexMain+1}-content`}
                  id={`panel${indexMain+1}-header`}

                  sx={{fontSize:'0.5vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}
                >
                  <h1>{exercise.name.toUpperCase()}</h1>

                </AccordionSummary>

                <AccordionDetails>
                <div className='exerciseCardDiv'>
                  
                  <img src={exercise.gifUrl} style={{height:'30vh'}}/>
                  <div className='exerciseInfoDiv'>
                    <h2>Exercise Name : </h2>
                    <p>{exercise.name.toUpperCase()}</p>

                    <h2>Equipment Needed: </h2>
                    <p>{exercise.equipment.toUpperCase()}</p>

                    <h2>Body Part : </h2>
                    <p>{exercise.bodyPart.toUpperCase()}</p>

                    <h2>Instructions :</h2>
                    <div className='stepsDiv'>
                      {exercise.instructions.map((item,index)=>{
                          return <p>{index+1}. {item}</p>;
                        })}
                    </div>
                      

                    <h2>Target Muscles : </h2>
                    <p>{exercise.target.toUpperCase()}</p>

                    <h2>Secondary Engaged Muscles :</h2>
                    {exercise.secondaryMuscles.map((item)=>{
                      return <p>{item.toUpperCase()}</p>
                    })}

                  </div>
                </div>
                </AccordionDetails>

                <div className='exerciseMarkingButtonsDiv'>
                    <div className='completedCheckDiv'>
                      <ThumbUpAltIcon sx={{marginRight:'10px'}}/>
                      <h3>Mark exercise as Completed</h3>
                    </div>
                    <div className='notCompletedCheckDiv'>
                      <CancelIcon sx={{marginRight:'10px'}}/>
                      <h3>Mark exercise as not Completed</h3>
                    </div>
                    <div className='removeExerciseDiv'>
                      <DeleteOutlineIcon sx={{marginRight:'10px'}}/>
                      <h3>Remove exercise</h3>
                    </div>
                    
                  </div>
              </Accordion>
                
              </>
            );
          })
        }
        </div>
        </div>
    </>
  )
}

export default MyExercises