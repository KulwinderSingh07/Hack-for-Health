import React, { useEffect } from 'react'

//CSS Imports
import '../CSS/ExercisesPage.css';

//Local GYM Data
import GymData from '../data/gymExercises.json';

//MATERIAL UI IMPORTS
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SearchIcon from '@mui/icons-material/Search';
import MyExercises from './ExercisesSections/MyExercises';

const ExercisesPage = () => {
  // console.log(GymData);

  //GYM DATA FETCHING :
  const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key': '49a6667aa7msh48de9f0b760cd1cp1cb90ajsnaf5f8e52cf00',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  const exerciseURL = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';

  const fetchData = async(options,url)=>{
    const res = await fetch(url,options);
    const data = await res.json();
    console.log(data);
  }


  useEffect(()=>{
    //DONT FETCH GYM DATA, IT HAS LIMIT TO FREE CALLS, ONLY I WILL UNCOMMENT THIS
    // fetchData(exerciseOptions,exerciseURL);
  },[])

  return (
    <div className='exerisesMainDiv'>
        <MyExercises/>

        <Divider sx={{backgroundColor:'white'}} orientation='vertical' flexItem/>

        {/*Search Exercises */}
        <div className='searchExercises'>
        <div className='exercisesSuggestionHeader'>
        <SearchIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>SEARCH EXERCISES FOR SPECIFIC BODY PART</h3>
        </div>

        {/*My Exercises Rendering below*/}
        {
          GymData.map((exercise,indexMain)=>{
            return (
              <>
              <Accordion sx={{overflow:'hidden',marginTop:'0.5vw',marginBottom:'0.5vw'}}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${indexMain+1}-content`}
                  id={`panel${indexMain+1}-header`}

                  sx={{fontSize:'0.5vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}
                >
                  <h1>{indexMain+1}. Exercise</h1>

                  <div>
                    <button>Mark as Completed</button>
                    <button>Remove exercise</button>
                  </div>
                  

                </AccordionSummary>
                <AccordionDetails className='accordianDetails'>
                <div className='exerciseCardDiv'>
                  
                  <img src={exercise.gifUrl} style={{height:'30vh'}}/>
                  <div className='exerciseInfoDiv'>
                    <h2>Exercise Name : </h2>
                    <p>{exercise.name}</p>

                    <h2>Equipment Needed: </h2>
                    <p>{exercise.equipment}</p>

                    <h2>Instructions :</h2>
                      {exercise.instructions.map((item,index)=>{
                        return <p>{index+1}. {item}</p>;
                      })}

                    <h2>Target Muscles : </h2>
                    <p>{exercise.target}</p>

                    <h2>Secondary Engaged Muscles :</h2>
                    {exercise.secondaryMuscles.map((item)=>{
                      return <p>{item}</p>
                    })}

                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
                
              </>
            );
          })
        }
        </div>
        
        

        </div>
  )
}

export default ExercisesPage