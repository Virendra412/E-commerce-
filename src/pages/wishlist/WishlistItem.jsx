import React from 'react'
import Button from '../../components/Button/Button'

import { DeleteForeverRounded } from '@mui/icons-material';
import axios from 'axios';
import { globalState } from '../../components/context/Context';
import { deleteFromWishlist } from '../../../utils';
import { toast } from 'react-toastify';






const WishlistItem = ({ data }) => {
  const { token, setCart,setWishlist } = globalState()
  const {_id,...cartData}=data
   
  function errorHandler(error) {
    console.log(error.response.data.message);
    toast.error("Something went wrong")
  }

  const transferToCart = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/wishlist/addcart', cartData, { headers: { Authorization: `Bearer ${token}` } })
      setCart(prev => {
        return [...prev,response.data]
      })
    } catch (error) {
      errorHandler(error)
    }
   
  }
  const RemoveFromWishlist = async () => {
    try {
      const response = await deleteFromWishlist(token, data._id)
      setWishlist(prev => {
      return  prev.filter(item => {
          return item._id!=response._id
        })
      })
    } catch (error) {
      errorHandler(error)
    }
    
  }


  return (
    <div className="product py-4">
                  <div className="img_sec"><img src={data.product.images[0]}/></div>
                  <div className="info_sec">
                      <h4 className='mb-1'>{data.product.title}</h4>
                      <h5 className='mb-2'>{data.product.color}</h5>
                      <p className='mb-0'><span className='fw-bold'>SIZE: </span>&nbsp;{data.size}</p>
                      <p className='mb-2'><span className='fw-bold'>PRICE: </span><span>&nbsp;<del>
                      ₹{data.product.original_price.toLocaleString('en-US')}</del>&nbsp;&nbsp;</span><span className='text-danger fw-bolder'>
                              ₹{data.product.price.toLocaleString('en-US')}</span></p>
                      
                      <div onClick={RemoveFromWishlist}><DeleteForeverRounded sx={{ fontSize: '35px',marginBottom:'3%' }} /></div>
                      
                      <div><Button bg='black' color='white' width='100%'cb={transferToCart}>ADD TO CART</Button></div>
                    
                  </div>
              </div>
  )
}

export default WishlistItem;