import React from 'react';
import DoctorImage from '../assets/images/doctorLogin.jpg';

const LoginPage = () => {
  return (
    <>
    <div className='loginOutermostDiv'>
        {/*Login ScreenDiv*/}
        <div>
            <img src={DoctorImage}/>
        </div>

    </div>
    </>
  )
}

export default LoginPage