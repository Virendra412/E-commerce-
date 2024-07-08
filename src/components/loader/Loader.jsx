import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './loader.css'
 const Loader = ({isVisible}) => {
   return (
    
    <motion.div key={'modal'} initial={{ background: '#000000' }}
    animate={{ background: '#FFFFFF' }}
   
         className='loader d-flex w-100 justify-content-center align-items-center '><h1>PUMA</h1></motion.div>
     
  )
}

export default Loader;