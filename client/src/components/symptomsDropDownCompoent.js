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
      SymptomName:"itching",
      checkBoxSelected:false
    },
    {
      SymptomName:"skin_rash",
      checkBoxSelected:false
    },
    {
      SymptomName:"nodal_skin_eruptions",
      checkBoxSelected:false
    },
    {
      SymptomName:"continuous_sneezing",
      checkBoxSelected:false
    },
    {
      SymptomName:"shivering",
      checkBoxSelected:false
    },
    {
      SymptomName:"chills",
      checkBoxSelected:false
    },
    {
      SymptomName:"joint_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"stomach_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"acidity",
      checkBoxSelected:false
    },
    {
      SymptomName:"ulcers_on_tongue",
      checkBoxSelected:false
    },
    {
      SymptomName:"muscle_wasting",
      checkBoxSelected:false
    },
    {
      SymptomName:"vomiting",
      checkBoxSelected:false
    },
    {
      SymptomName:"burning_micturition",
      checkBoxSelected:false
    },
    {
      SymptomName:"spotting_urination",
      checkBoxSelected:false
    },
    {
      SymptomName:"fatigue",
      checkBoxSelected:false
    },
    {
      SymptomName:"weight_gain",
      checkBoxSelected:false
    },
    {
      SymptomName:"anxiety",
      checkBoxSelected:false
    },
    {
      SymptomName:"cold_hands_and_feets",
      checkBoxSelected:false
    },
    {
      SymptomName:"mood_swings",
      checkBoxSelected:false
    },
    {
      SymptomName:"weight_loss",
      checkBoxSelected:false
    },
    {
      SymptomName:"restlessness",
      checkBoxSelected:false
    },
    {
      SymptomName:"lethargy",
      checkBoxSelected:false
    },
    {
      SymptomName:"patches_in_throat",
      checkBoxSelected:false
    },
    {
      SymptomName:"irregular_sugar_level",
      checkBoxSelected:false
    },
    {
      SymptomName:"cough",
      checkBoxSelected:false
    },
    {
      SymptomName:"high_fever",
      checkBoxSelected:false
    },
    {
      SymptomName:"sunken_eyes",
      checkBoxSelected:false
    },
    {
      SymptomName:"breathlessness",
      checkBoxSelected:false
    },
    {
      SymptomName:"sweating",
      checkBoxSelected:false
    },
    {
      SymptomName:"dehydration",
      checkBoxSelected:false
    },
    {
      SymptomName:"indigestion",
      checkBoxSelected:false
    },
    {
      SymptomName:"headache",
      checkBoxSelected:false
    },
    {
      SymptomName:"yellowish_skin",
      checkBoxSelected:false
    },
    {
      SymptomName:"dark_urine",
      checkBoxSelected:false
    },
    {
      SymptomName:"nausea",
      checkBoxSelected:false
    },
    {
      SymptomName:"loss_of_appetite",
      checkBoxSelected:false
    },
    {
      SymptomName:"pain_behind_the_eyes",
      checkBoxSelected:false
    },
    {
      SymptomName:"back_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"constipation",
      checkBoxSelected:false
    },
    {
      SymptomName:"abdominal_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"diarrhoea",
      checkBoxSelected:false
    },
    {
      SymptomName:"mild_fever",
      checkBoxSelected:false
    },
    {
      SymptomName:"yellow_urine",
      checkBoxSelected:false
    },
    {
      SymptomName:"yellowing_of_eyes",
      checkBoxSelected:false
    },
    {
      SymptomName:"acute_liver_failure",
      checkBoxSelected:false
    },
    {
      SymptomName:"fluid_overload",
      checkBoxSelected:false
    },
    {
      SymptomName:"swelling_of_stomach",
      checkBoxSelected:false
    },
    {
      SymptomName:"swelled_lymph_nodes",
      checkBoxSelected:false
    },
    {
      SymptomName:"malaise",
      checkBoxSelected:false
    },
    {
      SymptomName:"blurred_and_distorted",
      checkBoxSelected:false
    },
    {
      SymptomName:"phlegm",
      checkBoxSelected:false
    },
    {
      SymptomName:"throat_irritation",
      checkBoxSelected:false
    },
    {
      SymptomName:"redness_of_eyes",
      checkBoxSelected:false
    },
    {
      SymptomName:"sinus_pressure",
      checkBoxSelected:false
    },
    {
      SymptomName:"runny_nose",
      checkBoxSelected:false
    },
    {
      SymptomName:"congestion",
      checkBoxSelected:false
    },
    {
      SymptomName:"chest_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"weakness_in_limbs",
      checkBoxSelected:false
    },
    {
      SymptomName:"fast_heart_rate",
      checkBoxSelected:false
    },
    {
      SymptomName:"pain_during_bowel_movements",
      checkBoxSelected:false
    },
    {
      SymptomName:"pain_in_anal_region",
      checkBoxSelected:false
    },
    {
      SymptomName:"bloody_stool",
      checkBoxSelected:false
    },
    {
      SymptomName:"irritation_in_anus",
      checkBoxSelected:false
    },
    {
      SymptomName:"neck_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"dizziness",
      checkBoxSelected:false
    },
    {
      SymptomName:"cramps",
      checkBoxSelected:false
    },
    {
      SymptomName:"bruising",
      checkBoxSelected:false
    },
    {
      SymptomName:"obesity",
      checkBoxSelected:false
    },
    {
      SymptomName:"swollen_legs",
      checkBoxSelected:false
    },
    {
      SymptomName:"swollen_blood_vessels",
      checkBoxSelected:false
    },
    {
      SymptomName:"puffy_face_and_eyes",
      checkBoxSelected:false
    },
    {
      SymptomName:"enlarged_thyroid",
      checkBoxSelected:false
    },
    {
      SymptomName:"brittle_nails",
      checkBoxSelected:false
    },
    {
      SymptomName:"swollen_extremeties",
      checkBoxSelected:false
    },
    {
      SymptomName:"excessive_hunger",
      checkBoxSelected:false
    },
    {
      SymptomName:"extra_marital_contacts",
      checkBoxSelected:false
    },
    {
      SymptomName:"drying_and_tingling_lips",
      checkBoxSelected:false
    },
    {
      SymptomName:"slurred_speech",
      checkBoxSelected:false
    },
    {
      SymptomName:"knee_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"hip_joint_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"muscle_weakness",
      checkBoxSelected:false
    },
    {
      SymptomName:"stiff_neck",
      checkBoxSelected:false
    },
    {
      SymptomName:"swelling_joints",
      checkBoxSelected:false
    },
    {
      SymptomName:"movement_stiffness",
      checkBoxSelected:false
    },
    {
      SymptomName:"spinning_movements",
      checkBoxSelected:false
    },
    {
      SymptomName:"loss_of_balance",
      checkBoxSelected:false
    },
    {
      SymptomName:"unsteadiness",
      checkBoxSelected:false
    },
    {
      SymptomName:"weakness_of_one_body_side",
      checkBoxSelected:false
    },
    {
      SymptomName:"loss_of_smell",
      checkBoxSelected:false
    },
    {
      SymptomName:"bladder_discomfort",
      checkBoxSelected:false
    },
    {
      SymptomName:"foul_smell_ofurine",
      checkBoxSelected:false
    },
    {
      SymptomName:"continuous_feel_of_urine",
      checkBoxSelected:false
    },
    {
      SymptomName:"passage_of_gases",
      checkBoxSelected:false
    },
    {
      SymptomName:"internal_itching",
      checkBoxSelected:false
    },
    {
      SymptomName:"toxic_look_(typhos)",
      checkBoxSelected:false
    },
    {
      SymptomName:"depression",
      checkBoxSelected:false
    },
    {
      SymptomName:"irritability",
      checkBoxSelected:false
    },
    {
      SymptomName:"muscle_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"altered_sensorium",
      checkBoxSelected:false
    },
    {
      SymptomName:"red_spots_over_body",
      checkBoxSelected:false
    },
    {
      SymptomName:"belly_pain",
      checkBoxSelected:false
    },
    {
      SymptomName:"abnormal_menstruation",
      checkBoxSelected:false
    },
    {
      SymptomName:"dischromic_patches",
      checkBoxSelected:false
    },
    {
      SymptomName:"watering_from_eyes",
      checkBoxSelected:false
    },
    {
      SymptomName:"increased_appetite",
      checkBoxSelected:false
    },
    {
      SymptomName:"polyuria",
      checkBoxSelected:false
    },
    {
      SymptomName:"family_history",
      checkBoxSelected:false
    },
    {
      SymptomName:"mucoid_sputum",
      checkBoxSelected:false
    },
    {
      SymptomName:"rusty_sputum",
      checkBoxSelected:false
    },
    {
      SymptomName:"lack_of_concentration",
      checkBoxSelected:false
    },
    {
      SymptomName:"visual_disturbances",
      checkBoxSelected:false
    },
    {
      SymptomName:"receiving_blood_transfusion",
      checkBoxSelected:false
    },
    {
      SymptomName:"receiving_unsterile_injections",
      checkBoxSelected:false
    },
    {
      SymptomName:"coma",
      checkBoxSelected:false
    },
    {
      SymptomName:"stomach_bleeding",
      checkBoxSelected:false
    },
    {
      SymptomName:"distention_of_abdomen",
      checkBoxSelected:false
    },
    {
      SymptomName:"history_of_alcohol_consumption",
      checkBoxSelected:false
    },
    {
      SymptomName:"fluid_overload",
      checkBoxSelected:false
    },
    {
      SymptomName:"blood_in_sputum",
      checkBoxSelected:false
    },
    {
      SymptomName:"prominent_veins_on_calf",
      checkBoxSelected:false
    },
     {
      SymptomName:"palpitations",
      checkBoxSelected:false
    },
    {
      SymptomName:"painful_walking",
      checkBoxSelected:false
    },
    {
      SymptomName:"pus_filled_pimples",
      checkBoxSelected:false
    },
    {
      SymptomName:"blackheads",
      checkBoxSelected:false
    },
    {
      SymptomName:"scurring",
      checkBoxSelected:false
    },
    {
      SymptomName:"skin_peeling",
      checkBoxSelected:false
    },
    {
      SymptomName:"silver_like_dusting",
      checkBoxSelected:false
    },
    {
      SymptomName:"small_dents_in_nails",
      checkBoxSelected:false
    },
    {
      SymptomName:"inflammatory_nails",
      checkBoxSelected:false
    },
    {
      SymptomName:"blister",
      checkBoxSelected:false
    },
    {
      SymptomName:"red_sore_around_nose",
      checkBoxSelected:false
    },
    {
      SymptomName:"yellow_crust_ooze",
      checkBoxSelected:false
    },
    {
      SymptomName:"prognosis",
      checkBoxSelected:false
    },
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