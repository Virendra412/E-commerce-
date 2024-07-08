import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import React from 'react'
import CssLoader from '../AnimatedLoader/CssLoader';

 const MyBackdrop = ({isOpen}) => {
  return (
    <Backdrop sx={{ background: 'rgba(0,0,0,0.3)', zIndex: 1000 }} open={isOpen} >
      <CssLoader/>
    </Backdrop>
    
    

  )
}

export default MyBackdrop;