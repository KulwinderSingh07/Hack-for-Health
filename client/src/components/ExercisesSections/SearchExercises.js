import React, { useEffect ,useState} from 'react'

//MATERIAL UI IMPORTS
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

//LOCAL GYM DTAA
import GymData from '../../data/gymExercises.json';

const searchTermEnum = ["back","cardio","chest","lower arms","lower legs","neck","shoulders","upper arms","upper legs","waist"];

const SearchExercises = () => {
    const [array,setArray] = useState([]);
    const [searchTerm,setSearchTerm] = useState("");

    // let secondaryCheck = (val,searchingItem)=>{
    //     return val.secondaryMuscles.indexOf(searchingItem);
    // }

    // const handleSearch = () =>{
        //Search criteria : BodyPart, Name of exercise, target muscles, secondary muscles
        // let bodyCriteria = val.bodyPart.toLowerCase().includes(searchTerm.toLowerCase());
        // let nameCriteria = val.name.toLowerCase().includes(searchTerm.toLowerCase());
        // let targetMusclesCriteria = val.target.toLowerCase().includes(searchTerm.toLowerCase());
        // let secondaryMusclesCriteria = val.secondaryMuscles.toLowerCase().includes(searchTerm.toLowerCase());

        // const newData = GymData.filter((val)=>{
        //     if(searchTerm == ""){
        //         return val;
        //     }else if(val.bodyPart.toLowerCase().includes(searchTerm.toLowerCase()) || val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.target.toLowerCase().includes(searchTerm.toLowerCase()) || secondaryCheck(val,searchTerm.toLowerCase())!=-1){
        //         return val;
        //     }
        // });

    // }

    //API EXERCISE FETCHING BASED ON BODY PART
    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchTerm.toLowerCase()}`,
      params: {limit: '10'},
      headers: {
        'X-RapidAPI-Key': '49a6667aa7msh48de9f0b760cd1cp1cb90ajsnaf5f8e52cf00',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };

    const fetchData = async()=>{
      try {
        if(searchTermEnum.indexOf(searchTerm)==-1){
          setArray([]);
          return;
        }

        const response = await axios.request(options);
        console.log(response.data);
        //Setting the new data
        setArray(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    useEffect(()=>{
        setArray([]);
    },[])

  return (
    <>
    <div className='searchExercises'>
    <div className='exercisesSuggestionHeader'>
        <input onChange={(e)=>setSearchTerm(e.target.value)} style={{marginRight:'15px'}} placeholder='SEARCH EXERCISES FOR SPECIFIC BODY PART ...' className='searchExerciseHeaderInput'/>
        <SearchIcon onClick={()=>{fetchData()}} sx={{marginRight:'5vw',fontSize:'1.5vw',marginTop:'-0.2vw',paddingTop:'0.2vw',paddingBottom:'0.2vw',paddingRight:'0.5vw',paddingLeft:'0.5vw',backgroundImage:'linear-gradient(to top right,green,aqua)',borderRadius:'10px',":hover":{cursor:'pointer'}}}/>
        </div>

        <div className='enumBodyPartsStyle'>
          {searchTermEnum.map((item)=>{
            return (<h2>{item}</h2>);
          })}
        </div>

        {/*My Exercises Rendering below*/}
        <div className='myExercisesMap'>
        {
          array?array.map((exercise,indexMain)=>{
            return (
              <>
              <Accordion className='accordianMaterialUi' sx={{backgroundImage:'linear-gradient(to right,orange, #fad0c4)',marginTop:'0.5vw',marginBottom:'0.5vw'}}>
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon />
                }
                  aria-controls={`panel${indexMain+1}-content`}
                  id={`panel${indexMain+1}-header`}

                  sx={{fontSize:'0.5vw',display:'flex',justifyContent:'space-between',alignItems:'center'}}
                >
                  <h1 style={{color:'white'}}>{exercise.name.toUpperCase()}</h1>

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

                    <div className='addToListDIv'>
                      <AssignmentReturnIcon sx={{marginRight:'10px'}}/>
                      <h3>Add Exercise to Suggested List</h3>
                    </div>
                    
                  </div>
              </Accordion>
                
              </>
            );
          }):<></>
        }
        </div>    
             
    </div>
    </>
  )
}

export default SearchExercises