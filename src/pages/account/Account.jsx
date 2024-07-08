import React from 'react'
import { globalState } from '../../components/context/Context'
import Auth from './auth/Auth'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Address from './address/Address';
import Button from '../../components/Button/Button';


export const Account = () => {
  const { user,setUser,setToken,setCart } = globalState()
  
  function Logout() {
    localStorage.removeItem('userToken')
    setUser({})
    setToken(null)
    setCart([])
    
    
  }
  return (<>
    {user._id ? 
      <div className="myAccount px-5  my-5 m-auto" style={{minHeight:'70vh'}}>
        <h1>My Account</h1>
        <div className="information d-flex gap-5 ">
          <div className="userInfo flex-grow-1">
            <h3 className='border-bottom p-2 d-flex align-items-center' style={{letterSpacing:'0.7px' }} ><PersonOutlineIcon sx={{fontSize:'30px', marginRight:'5px'}}/> Profile</h3>
            <p className='fs-5 mt-3 mb-1'><span className='fw-bold'>Name:</span> {user.username }</p>
            <p className='fs-5'><span className='fw-bold '>Email:</span> {user.email}</p>
            <Button bg='black' color='white' cb={Logout}>Logout</Button>
            
            
          </div>
          <div className="address flex-grow-1">
          <h3 className='border-bottom p-2 d-flex align-items-center' style={{ letterSpacing: '0.7px' }}><MenuBookIcon sx={{ fontSize: '35px', marginRight: '5px' }} /> Address Book</h3>
          <Address/>
          </div>
        </div>
      </div>
     
      
      
      
      
      
      
      : <Auth />}
    
    </>
  )
}
