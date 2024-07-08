import { Drawer } from '@mui/material'
import './drawer.css'
import React, { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import navData from '../assets/navbar'
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

export const MyDrawer = ({ isOpen, toggleDrawer, data,fullMenuCloser }) => {
 
  const [d2IsOpen, setD2IsOpen] = useState(false)
  const [d2Data, setD2Data] = useState(data.categories[0])

  useEffect(()=>{
    if (!isOpen) {
      setD2IsOpen(false)
    }
  },[isOpen])
  // console.log(d2Data);
  return (<>
    <Drawer open={d2IsOpen} anchor='right'>
        <div className='closer' onClick={() => setD2IsOpen(!d2IsOpen)}><span className='icon'><KeyboardArrowLeftIcon /></span><h1>{d2Data.title}</h1></div>
        <div className='Drawer-content'>
              <ul>
                  {d2Data?.sub_cat.map(e => {
                      return (<li key={e.url} className='drawer_links' onClick={fullMenuCloser}><Link to={e.url} state={{"operation":"subCategeorySearch"}}>{e.title }</Link></li>)
                  })}
                  
              </ul>
            </div>
      </Drawer>
    <Drawer open={isOpen} onClose={toggleDrawer} anchor='right' className='mydrawer' >
      
          <div className='closer' onClick={toggleDrawer}><span className='icon'><KeyboardArrowLeftIcon /></span><h1>{data?.heading}</h1></div>
          <div className='Drawer-content'>
              <ul>
                  {data?.categories.map((e,i) => {
                    return (<li key={uuid()} onClick={() => { setD2IsOpen(!d2IsOpen);setD2Data(data.categories[i])}}>{e.title } <span className='dropIcon'><KeyboardArrowRightIcon/></span></li>)
                  })}
                  
              </ul>
            </div>
          
    </Drawer>
    </>
  )
}
