import React, { useEffect, useRef, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { motion } from 'framer-motion';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Button from '../../components/Button/Button'

import { deleteFromCart, getInteger, updateCartQuantity } from '../../../utils';

import { globalState } from '../../components/context/Context';
import MyDialog from '../../components/dialogBox/MyDialog';
import { Link } from 'react-router-dom';
import MyBackdrop from '../../components/backdrop/MyBackdrop';

export const CartSingle = ({ productData}) => {
    const { cart, setCart } = globalState();
    const [isLoading, setIsLoading]= useState(false)

    const [isDialogOpen,setIsDialogOpen]=useState(false) 
    
    async function handleQuantity(id, quantity) {
       setIsLoading(true)
        const res=  await updateCartQuantity(id, quantity)
        setCart(res)
        setIsLoading(false)
       
    }

    async function deleteCart(cartID) {
        const res = await deleteFromCart(cartID)
        console.log(res);
        setCart(res)

    }
    
  return (
      <motion.div className="product_sec" animate={{ y: [50, 0], opacity: [0, 1] }}>
          <MyBackdrop isOpen={isLoading}/>
          <MyDialog isOpen={isDialogOpen} dialogToggler={()=>{setIsDialogOpen(false)}}  handleFunction={()=>{deleteCart(productData?._id)}} productData={productData} />
    <div className="product_image"><Link to={`/product/${productData.product._id}`} className='align-items-start'><img src={productData?.product.images[0]} alt="" /></Link></div>
    <div className="cart-product-info d-flex justify-content-between ">
        <div>
        <h5 className='mb-3' style={{fontSize:'var(--hs5)'}}>{productData?.product.title}</h5>
        <p className='mb-1' style={{fontSize:'var(--p5)'}}><span>Color: </span >{productData?.product.color}</p>
            <p className='mb-1' style={{fontSize:'var(--p5)'}}><span>Size: </span>{productData?.size}</p>
                  <div className="size d-flex align-items-center p-3 border border-dark position-relative " style={{ borderRadius: '2px', width: 'fit-content' }}>{productData?.quantity } &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<KeyboardArrowDownIcon />
                
                <select className='size-selector' onChange={(e)=>{handleQuantity(productData._id,e.target.value)}}>
                    <option value="" disabled="">Qty</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>
                </select>
            
            
            </div>

        </div>
        <div>
            <h5 className='text-danger last_price 'style={{fontSize:'var(--hs5)'}}>₹{(productData?.product.price * productData?.quantity).toLocaleString('en-US')}</h5>
                  {!!productData?.product.original_price &&<h5 className='text-secondary fw-light' style={{fontSize:'var(--hs5)'}}><del>₹{(productData?.product.original_price * productData?.quantity).toLocaleString('en-US')}</del></h5>}
                  <Button className=' rounded d-flex justify-content-between' bg='rgb(240, 240, 240)' color='grey' cb={()=>{setIsDialogOpen(true)}} ><DeleteForeverOutlinedIcon/></Button>
                  
        </div>
        
    </div>
</motion.div>
  )
}


