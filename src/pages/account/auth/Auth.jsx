import * as React from 'react';
import './Auth.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Register from './Register';
import Login from './Login';
import { useLocation } from 'react-router-dom';

export default function Auth() {
  const [value, setValue] = React.useState('one');
  const loc = useLocation()
  console.log(loc.state);

    const handleChange = (event, newValue) => {
      console.log(newValue);
    setValue(newValue);
  };

    return (
      <>
        <div className="container-fluid d-flex justify-content-center align-items-start" style={{height:'70vh'}}>
          <div className="AccountWrapper mt-5">
          <Box sx={{ width: '100%',display:'flex',justifyContent:'center'}}>
      <Tabs
        value={value}
        onChange={handleChange}
               
                
        indicatorColor="secondary"
                aria-label="secondary tabs example"
                sx={{width:'100%', marginBottom:"20px"}}
      >
        <Tab value="one" label="Login"  sx={{width:'50%'}} />
        <Tab value="two" label="Register" sx={{width:'50%'}} />
        
      </Tabs>
      </Box>
      
    {value == "two" && <Register />}
            {value == "one" && <Login isRedirect={loc.state} />}

           
        </div>
  </div>
            </>
  )
}