import React, { useEffect } from 'react'
import Sidebar from './Sidebar';

//CSS Imports
import '../CSS/ExercisesPage.css';

//MATERIAL UI IMPORTS
import { Divider} from '@mui/material';
import MyExercises from './ExercisesSections/MyExercises';
import SearchExercises from './ExercisesSections/SearchExercises';

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
    <>
        <Sidebar/>
        <div className='exerisesMainDiv'>
        <MyExercises/>

        <Divider sx={{backgroundColor:'white'}} orientation='vertical' flexItem/>

        {/*Search Exercises */}
        <SearchExercises/>
        </div>
    </>
    
  )
}

export default ExercisesPage