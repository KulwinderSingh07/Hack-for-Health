import React, { useState } from 'react';
import DoctorImage from '../assets/images/doctorLogin.jpg';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import KeyIcon from '@mui/icons-material/Key';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

//css
import '../CSS/LoginPage.css';

const LoginPage = () => {
  const [onLogin,setOnLogin] = useState(false);
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleDataSubmit = async() =>{
    //check wether login or signup
    if(onLogin){
      //checks wether something is empty or not
      if(email=="" || password==""){
        return;
      }

      const res = await axios.post('http://localhost:3001/login/loginUser',{email,password});
      console.log(res);
      if(res.data.exists == true){
        navigate('/dashboard');//navigate to main dashboard
      }
    }else{
      //SIGN UP HANDLE
      //checks wether something is empty or not
      if(email=="" || password=="" || username == ""){
        return;
      }

      const res = await axios.post('http://localhost:3001/login/signUpUser',{username,email,password});
      console.log(res);
      if(res.data.exists == false){
        navigate('/dashboard');//navigate to main dashboard
      }else{
        //toastify-message
      }

    }
  }

  return (
    <>
    <div className='loginOutermostDiv'>
    <div className='loginHeaderDiv'>
        <HealthAndSafetyIcon sx={{fontSize:'2.5vw',marginRight:'20px'}}/><h1>MediTrack360</h1>
      </div>

      <div className='typeWritterStyle'>
        <h1>Transform your health journey with predictive insights.</h1>
      </div>
      

        {/*Login ScreenDiv*/}
        <div className='innerMainLoginDiv'>
            <img src={DoctorImage} className='doctorLoginPhoto'/>

            <div className='inputsDivLogin'>
              {/*Toggle between login and singup */}
              <div className='loginSignUpToggleDiv'>
                <h1 onClick={()=>{setOnLogin(true)}} style={{color:onLogin==false?'black':'blue'}}>
                  LOGIN
                </h1>
                <h1 onClick={()=>{setOnLogin(false)}} style={{color:onLogin==false?'blue':'black'}}>
                  SIGNUP
                </h1>
              </div>

              {/*Enter full name div */}
              {
                onLogin == true ? <></>:<div className="input_wrapp">
                <div className='input_container'>
                        <div className="input_icon">
                            <PersonIcon/>
                        </div>
                    <input
                        type='text'
                        placeholder='Enter Full Name'
                        onChange={(e)=>{setUsername(e.target.value)}}
                    />
                </div>
            </div>
              }
            

             {/*Enter your email*/}
             <div className="input_wrapp">
                <div className='input_container'>
                        <div className="input_icon">
                            <MailIcon/>
                        </div>
                    <input
                        type='text'
                        placeholder='Enter your email'
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                </div>
            </div>

             {/*Enter your password*/}
             <div className="input_wrapp">
                <div className='input_container'>
                        <div className="input_icon">
                            <KeyIcon/>
                        </div>
                    <input
                        type='text'
                        placeholder='Enter Your Password'
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
            </div>
            
            {/*Login Button or SignUp Button */}
            <div onClick={()=>handleDataSubmit()} className='loginButtonSubmitDiv'>
              {
                onLogin == true ? <h3>LOG IN</h3> : <h3>SIGN UP</h3>
              }
              
            </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default LoginPage