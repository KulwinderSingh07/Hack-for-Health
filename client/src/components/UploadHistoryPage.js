import React from 'react'

//MATERIAL UI IMPORTS
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

//CSS
import '../CSS/UploadHistoryPage.css';


const UploadHistoryPage = () => {
  return (
    <>
    <div className='uploadHistoryPageMainDiv'>

        {/*Imported Header*/}
        <div className='exercisesSuggestionHeader'>
            <PictureAsPdfIcon sx={{fontSize:'2vw',marginRight:'15px',marginTop:'-0.2vw'}}/><h3 className='exercisesHeaderText'>FILE UPLOAD HISTORY</h3>
        </div>
    
    </div>
    </>
  )
}

export default UploadHistoryPage