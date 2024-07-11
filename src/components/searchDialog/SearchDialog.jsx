import * as React from 'react';
import './searchDialog.css'

import Dialog from '@mui/material/Dialog';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import SearchIcon from '@mui/icons-material/Search';

import { FormControl, FormHelperText, InputAdornment, OutlinedInput } from '@mui/material';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { FormatLineSpacing } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function SearchDialog({ dialogToggler, isOpen,closeModal }) {
    const [search, setSearch] = React.useState("")
  const [result, setResult] = useState(null)
  const [isLoding, setIsLoding] = useState(false)
  const navigate= useNavigate()
  
  
  async function submitHandler(e) {
      
    if (e.type == 'keydown' && e.key!=='Enter') return
    
     console.log("working");
    if (search.length > 2) {
         e.preventDefault()
      dialogToggler()
      setSearch("")
         navigate(`/search?q=${search}`)
         

       }
       
      
  }  

  async function getSearchData() {
    setIsLoding(true)
    setResult(null)
    try {
      const res =await axios.post(`${import.meta.env.VITE_SERVER}/product/search`, { q: search })
      console.log(res.data);
      setResult(res.data)
      setIsLoding(false)
    } catch (error) {
      setIsLoding(false)
    }
}
  
  useEffect(() => {
    var timer;
    if (search.length <= 2) {
      setResult(null)
    }
   
    if (search.length > 2) {
       timer= setTimeout(() => {
        getSearchData()
     }, 800);
    }
    
    return ()=>{clearTimeout(timer)}
  },[search])



  return (
    <React.Fragment>
      <IconButton
        variant="outlined"
        style={{ color: "inherit" }}
        onClick={dialogToggler}
      >
        
        <SearchIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={isOpen}
        onClose={dialogToggler}
        TransitionComponent={Transition}
        className='SearchDialog' style={{height:'90%'}}
      >
        <div style={{ position: "relative", background: "#F6F7F8", color: "inherit", paddingBlock: "0.5vw", }} >
          <div className="d-flex align-items-center px-3 py-2 justify-content-between gap-3">
          
            
              <OutlinedInput sx={{width:"95%"}}
                placeholder="SEARCH PUMA.COM"
                value={search}
                endAdornment={
                  <InputAdornment sx={{ height: "100%" }} position="end" onClick={submitHandler} > <SearchIcon /> </InputAdornment>
                }
              onChange={(e) => { setSearch(e.target.value) }}
              onKeyDown={submitHandler}
                
                
              />
           
           

            <IconButton edge="start" color="inherit" onClick={() => { setSearch(""); dialogToggler()}} aria-label="close" >  <CloseIcon /> </IconButton> </div>
        </div>
        {!result?<div className={`_loader ${isLoding?"loading":null}`}>
          PUMA
        </div> :
        <div className="searchResult">
                 
        {result?.map(item => { 
          return (<div className='product_search_card d-flex align-items-center' ><Link to={`/product/${item._id}`} onClick={dialogToggler}>
            <div className="product_image flex-shrink-0" style={{ width:'100px',height:'100px',marginInlineEnd:'8px'}}><img style={{width:'100%', height:'100%'}} src={item.images[0]}  /></div>
            <div className="product_info">
              <h6>{item.title}</h6>
              <div className="prices d-flex gap-3"><p className='text-danger fw-bold mb-0'>₹{item.price.toLocaleString('en-US') }</p>
              {!!item.original_price &&<p className='text-secondary fw-medium'><del>₹{item.original_price.toLocaleString('en-US') }</del></p>}</div>
            </div>
            </Link>
         </div>)
        })}
            
            {!result?.length && <h3>No result Found</h3>}
     </div>
        }
        
       
      </Dialog>
    </React.Fragment>
  );
}