import React from 'react'
import { useNavigate } from 'react-router-dom';

//Material UI Imports
import SpeedIcon from '@mui/icons-material/Speed';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LogoutIcon from '@mui/icons-material/Logout';

//CSS Imports
import '../../CSS/SidebarNavTile.css';

const SidebarNavTile = ({iconName}) => {
    const navigate = useNavigate();

    const handleNavigate = (name) =>{
        if(name == 'Dashboard'){
            navigate('/');
        }else if(name == 'LogOut'){
            navigate("/card");
        }else if(name == 'Exercises'){
            navigate("/exercises");
        }
    }

  
    if(iconName == 'Dashboard'){
        return (<div onClick={()=>{handleNavigate(iconName)}} className='sidebarNavTileDiv'>
            <SpeedIcon style={{fontSize:'3vh',marginRight:'1vh'}}/> 
            <h4>Dashboard</h4>
        </div>);
    }else if(iconName == 'Exercises'){
        return (<div onClick={()=>{handleNavigate(iconName)}} className='sidebarNavTileDiv'>
            <FitnessCenterIcon style={{fontSize:'3vh',marginRight:'1vh'}}/> 
            <h4>Exercises</h4>
        </div>);
    }else if(iconName == 'Upload History'){
        return (<div onClick={()=>{handleNavigate(iconName)}} className='sidebarNavTileDiv'>
            <PictureAsPdfIcon style={{fontSize:'3vh',marginRight:'1vh'}}/> 
            <h4>Upload History</h4>
        </div>);
    }else if(iconName == 'LogOut'){
        return (<div onClick={()=>{handleNavigate(iconName)}} className='sidebarNavTileDiv' style={{paddingLeft:'7vh',paddingRight:'7vh',backgroundColor:'red'}}>
            <LogoutIcon style={{fontSize:'3vh',marginRight:'1vh'}}/> 
            <h4>LOG OUT</h4>
        </div>);
    }else{
        return <></>;
    }
}

export default SidebarNavTile