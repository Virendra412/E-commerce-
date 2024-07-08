import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import axios from "axios";
import * as Yup from 'yup'

import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { globalState } from "../../../components/context/Context";


export default function Register() {
  
  const [formData, setFormData] = useState({ username: '', email: '', password: '' })
  const [errors, setErrors] = useState({})
  const {setToken } =globalState()
  const navigate = useNavigate();

  let formSchema = Yup.object({
    username: Yup.string().min(3).required("Username is required"),
    email: Yup.string().email('Invalid Email Format').required("Email is required"),
    password: Yup.string().matches('(?=.*?[#?!@$%^&*-])',"Password must contain one special character").matches('(?=.*?[A-Z])','Password must contain one uppercase letter').matches('(?=.*?[a-z])','Password must contain one lowercase letter').matches('(?=.*?[0-9])','Password must contain a single one digit').min(8).required("password is required")
  })


 async function handleChange(e) {
    const { name, value } = e.target
   setFormData({ ...formData, [name]: value })
  //  console.log("change is working"+  value)

   
    try {
      await formSchema.validate({ ...formData, [name]: value }, { abortEarly: false })
      setErrors({})
    } catch (error) {
      let newErrors = {}
      
      error.inner.forEach(er => {
        newErrors[er.path]=er.message
      })
      setErrors(newErrors)
      // console.log(newErrors);
    }

  }

 async function SubmitHandler(e) {
   e.preventDefault()
   try {
     await formSchema.validate(formData, { abortEarly: false })
   }
   catch (error) {
    toast.error("Invalid Form Data")
     return
   }

   try {
    const response =await axios.post(`${import.meta.env.VITE_SERVER}/user/register`, formData).then(res=>res.data)
     console.log(response);
     toast.success("Successfully Register")
     window.localStorage.setItem("userToken", response.token)
     setToken(response.token)
     navigate("/")
   } catch (error) {
    toast.error(error.response.data.message)
   }
  
 
}
  

  return (
    <>
      <div className="d-flex justify-content-center"  >
      <form className="w-100" onSubmit={SubmitHandler} >
  <div className="mb-3">
    <label htmlFor="username" className="form-label">Name</label>
            <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={e=>handleChange(e)} />
            {errors.username ? <div className="form-error d-flex align-items-center text-danger" style={{ fontSize: '14px' }}><ErrorIcon sx={{ fontSize: '15px' }} />&nbsp;{errors.username} </div> :
            formData.username?<div className="form-error d-flex align-items-center text-success" style={{fontSize:'14px'}}><CheckCircleIcon sx={{fontSize:'15px'}}/>&nbsp;Looks good </div>:null}
    
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="email" name="email" value={formData.email} onChange={e => handleChange(e)} />
            {errors.email ? <div className="form-error d-flex align-items-center text-danger" style={{ fontSize: '14px' }}><ErrorIcon sx={{ fontSize: '15px' }} />&nbsp;{errors.email} </div> :
            formData.email?<div className="form-error d-flex align-items-center text-success" style={{fontSize:'14px'}}><CheckCircleIcon sx={{fontSize:'15px'}}/>&nbsp;Looks good </div>:null}
    
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
            <input type="password" autoComplete="off" className="form-control" id="password" name="password" value={formData.password} onChange={e => handleChange(e)} />
            {errors.password ? <div className="form-error d-flex align-items-center text-danger" style={{ fontSize: '14px' }}><ErrorIcon sx={{ fontSize: '15px' }} />&nbsp;{errors.password} </div> :
            formData.password?<div className="form-error d-flex align-items-center text-success" style={{fontSize:'14px'}}><CheckCircleIcon sx={{fontSize:'15px'}}/>&nbsp;Looks good </div>:null}
  </div>
 
  <Button bg='black' color='white' width="100%">SUBMIT</Button>
</form>
              
      </div>
    </>
  );
}
