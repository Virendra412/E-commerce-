import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from "axios";
import * as Yup from 'yup'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { globalState } from "../../../components/context/Context";
import MyBackdrop from "../../../components/backdrop/MyBackdrop";



export default function Login({isRedirect}) {

  const {setToken }=globalState()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isOpen,setIsOpen]= useState(false) 
  const [errors, setErrors] = useState({})
  const navigate = useNavigate();
  
  let formSchema = Yup.object({
    
    email: Yup.string().email('Invalid Email Format').required("Email is required"),
    password: Yup.string().matches('(?=.*?[#?!@$%^&*-])',"Password must contain one special character").matches('(?=.*?[A-Z])','Password must contain one uppercase letter').matches('(?=.*?[a-z])','Password must contain one lowercase letter').matches('(?=.*?[0-9])','Password must contain a single one digit').min(8).required("password is required")
  })
  

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
     setIsOpen(true)
     const response =await axios.post(`${import.meta.env.VITE_SERVER}/user/login`, formData).then(res=>res.data)
      toast.success("Successfully Logged in")
      window.localStorage.setItem("userToken", response.token)
      setToken(response.token)
      
      if (isRedirect) navigate(isRedirect.from.pathname)
        setIsOpen(false)
      
    } catch (error) {
      toast.error(error.response)
      setIsOpen(false)

    }
   
  
 }
   
  
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
    

  return (
    <>
       <MyBackdrop isOpen={isOpen}/>
      <div className="d-flex justify-content-center"  >
      <form className="w-100" onSubmit={SubmitHandler} >
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
 
  <Button bg='black' color='white' width="100%" cb={SubmitHandler}>SUBMIT</Button>
</form>
              
      </div>
    </>
  );
}
