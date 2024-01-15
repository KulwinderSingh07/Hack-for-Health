import Button from '@mui/material/Button';
import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const HistoryPopUpCompoent = ({open,setOpenPopUp,data,index}) => {
    const handleClose = () => {
        setOpenPopUp(-1);
    };
    console.log(data)
    function getVitalString(arr){
      let val=""
      console.log(arr)
      if(arr!=undefined){
        val+='[ '
        for(let i=0;i<arr.length;i++){
          if(i<arr.length-1){
            val=val+arr[i].vitalName +"=>"+ "[ Lower Bound : "+arr[i].lower_limit+" ," +"Result : "+arr[i].result+" , "+"Upper Bound : "+arr[i].upper_limit+" ] ,"+`\n`
          }else{
            val=val+arr[i]+" ] "
          }
        }
      }
        return val
    }

    function getFoodString(arr){
      let val=""
      console.log(arr)
      if(arr!=undefined){
        val+='[ '
        for(let i=0;i<arr.length;i++){
          if(i<arr.length-1){
            val=val+arr[i]+" , "
          }else{
            val=val+arr[i]+" ] "
          }
        }
      }
        return val
    }

    return ( 
        <Fragment>
          <Dialog onClose={handleClose}
            open={open==index?true:false}
            sx={{backdropFilter:"blur(5px) sepia(5%)"}}
            PaperProps={{sx:{borderRadius:"1rem"}}}
          >
        {/* <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          > */}
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Report Output
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
            >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <Typography gutterBottom>
             Food Items :{data?getFoodString(data.FoodItems[0].foodlist):""}
            </Typography>
            <Typography gutterBottom>
             Vitals List:{data?getVitalString(data.vitalsList):""}
            </Typography>
            {/* <Typography gutterBottom>
             Food Items:{`${data}`}
            </Typography> */}
          </DialogContent>
        {/* </BootstrapDialog> */}
            </Dialog>
      </Fragment>
    );
}
 
export default HistoryPopUpCompoent;