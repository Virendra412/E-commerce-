import React from 'react'
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

const Button = ({children,bg,color,width='fit-content',border="none",height="auto",cb,className}) => {
    const backgroundColor = bg ? bg : "white"
  const fontColor = color ? color : "black"
  
  return (
    <motion.button whileHover={{ filter: 'contrast(70%)' }} 
      className={className} style={{ background: backgroundColor, color: fontColor, width: width, border: border, height: height, padding: "8px 19px", fontWeight: 700,whiteSpace:'nowrap' }} onClick={cb}>{children}
     </motion.button>
  )
}

export default Button;