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

const PopUpCompoent = ({open,setOpen,title,pdfReportData}) => {
    const handleClose = () => {
      setOpen(false);
    };
    console.log(pdfReportData)
    return ( 
        <Fragment>
          <Dialog onClose={handleClose}
            open={open}
            sx={{backdropFilter:"blur(5px) sepia(5%)"}}
            PaperProps={{sx:{borderRadius:"1rem"}}}
          >
        {/* <BootstrapDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          > */}
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
           {title}
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
             File Name : {pdfReportData?pdfReportData.fileName:""}
            </Typography>
            {pdfReportData!=undefined?pdfReportData.FoodItems.map((val)=>{
              return (
            <Typography gutterBottom>
             Disease Name : {val?val.disease:""}
            </Typography>
              )
            })
          :
          <Typography>
            Hello
          </Typography>
          }
            <Typography gutterBottom>
              
            </Typography>
          </DialogContent>
        {/* </BootstrapDialog> */}
            </Dialog>
      </Fragment>
    );
}
 
export default PopUpCompoent;