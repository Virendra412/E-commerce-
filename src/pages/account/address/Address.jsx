
import React, { useState } from 'react'
import Button from '../../../components/Button/Button'

const Address = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' })
    const [errors, setErrors]= useState({})
    function handleChange() {
        
    }

    function SubmitHandler(e) {
        e.preventDefault()
    }
  return (
    <div className="d-flex justify-content-center"  >
    <form className="w-100" onSubmit={SubmitHandler} >
  
  <div className=' d-flex gap-4'>
        <div className="mb-3 flex-grow-1">
    <label htmlFor="firstName" className="form-label fw-bold mb-0" style={{fontSize:'12px'}}>FIRST NAME</label>
          <input type="text" className="form-control p-1 border border-black rounded-1" id="firstName" name="firstName" onChange={e => handleChange(e)} />
          
</div>
<div className="mb-3 flex-grow-1">
  <label htmlFor="lastName" className="form-label fw-bold mb-0" style={{fontSize:'12px'}}>LAST NAME</label>
          <input type="text" autoComplete="off" className="form-control p-1 border border-black rounded-1" id="lastName" name="lastName" value={formData.password} onChange={e => handleChange(e)} />
          
</div>
        </div>
<div className="mb-3">
  <label htmlFor="lastName" className="form-label fw-bold mb-0" style={{fontSize:'12px'}}>ADDRESS LINE</label>
          <input type="text" autoComplete="off" className="form-control p-1 border border-black rounded-1" id="lastName" name="lastName" value={formData.password} onChange={e => handleChange(e)} />
          
</div>
<div className="mb-3">
  <label htmlFor="lastName" className="form-label fw-bold mb-0" style={{fontSize:'12px'}}>CITY</label>
          <input type="text" autoComplete="off" className="form-control p-1 border border-black rounded-1" id="lastName" name="lastName" value={formData.password} onChange={e => handleChange(e)} />
          
</div>
<div className="mb-3">
  <label htmlFor="lastName" className="form-label fw-bold mb-0" style={{fontSize:'12px'}}>PINCODE</label>
          <input type="text" autoComplete="off" className="form-control p-1 border border-black rounded-1" id="lastName" name="lastName" value={formData.password} onChange={e => handleChange(e)} />
          
</div>

<Button bg='black' color='white' width="100%" cb={SubmitHandler}>Add New Address</Button>
          </form>
     </div>
  )
}

export default Address;