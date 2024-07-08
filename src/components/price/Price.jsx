import { Drawer } from '@mui/material'
import React, { useState } from 'react'
import Button from '../Button/Button'

import { MyDrawer } from '../../drawer/MyDrawer'

export const Price = ({ children=0 }) => {
    const p = parseInt(children)
    

  return (<>
      <h4 style={{ color: '#b80000' }} onClick={()=>{setDrawer(!drawer)}}>₹{p.toLocaleString('en-US')}</h4>
    
      </>
  )
}
