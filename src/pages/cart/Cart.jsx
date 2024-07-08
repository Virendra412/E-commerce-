const productData={
    "title": "Porsche Legacy Caven 2.0 Unisex Motorsport Sneakers",
    "price": "₹4,199",
    "images": [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/sv01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/mod01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/bv/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/sv02/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/sv03/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/308158/01/sv04/fnd/IND/fmt/png/Porsche-Legacy-Caven-2.0-Unisex-Motorsport-Sneakers"
    ],
    "description": " PRODUCT STORY We took our throwback 1980s basketball shoe and added a stand-out stacked midsole, and what we got is a trainer we think you'll love. Porsche Legacy Caven 2.0 features the brand's most iconic colours as well as the Porsche Legacy logo on the tongue.",
    "details": [
      "SOFTFOAM+: Step-in comfort sockliner designed to provide soft cushioning thanks to its extra thick heel",
      "The upper of the shoes is made with at least 20% recycled materials and the bottom is made with at least 10% recycled materials.",
      "Outsole: 100% Rubber",
      "Midsole: SOFTFOAM+ with a stacked design.",
      "Upper: Synthetic with leather details",
      "Closure: Laces",
      "Rounded toe",
      "Sockliner: 100% Textile",
      "Outsole: 100% Rubber",
      "Upper: 97.33% Synthetic, 2.67% Textile",
      "Lining: 100% Textile"
    ]
}
import CircularProgress from '@mui/material/CircularProgress';
import { KeyboardArrowDown } from '@mui/icons-material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { cartCheckOut, getCartData, getInteger } from '../../../utils'
import { CartSingle } from './CartSingle'
import './cart.css'
import Button from '../../components/Button/Button'

  
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Loader from '../../components/loader/Loader'
import { AnimatePresence } from 'framer-motion'
import MyBackdrop from '../../components/backdrop/MyBackdrop';
import { globalState } from '../../components/context/Context';
import MyDialog from '../../components/dialogBox/MyDialog';
import axios from 'axios';
import { toast } from 'react-toastify';


const Cart = () => {
    
 
  const [total, setTotal] = useState(0)
  const [cartData, setCartData] = useState(null)
  const [fetchAgain, setFetchAgain] = useState(false)
  const {cart,setCart,user,userLoading,token}=globalState()
  



  
  useEffect(()=>{
  
    if (!!cart.length) {
      let tt = cart?.map((e) => (e.product.price * e.quantity)).reduce((acu, current) => current + acu)
      setTotal(tt)
      }
 },[cart])

 
  async function PaymentHandler(e) {
    e.preventDefault()
    const order = await axios.post('http://localhost:3000/razorpay/order', { amount: total*100, currency: "INR" }).then(res => res.data)
    console.log(order);

    var options = {
      "key": "rzp_test_vVIiPAUmcXCay9", // Enter the Key ID generated from the Dashboard
      "amount": 5000000, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Uday Pratap", //your business name
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler":async function (response) {
        toast.success("Your order has been placed😊")
        const res = await cartCheckOut(token)
        setCart([])
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
      },
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
          "name": user.username, //your customer's name
          "email": user.email, 
          "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
      },
      "notes": { "address": "Razorpay Corporate Office" }, "theme": { "color": "#3399cc" }
  }
    
  var rzp1 = new Razorpay(options);
  // rzp1.on('payment.failed', function (response){
  //         alert(response.error.code);
  //         alert(response.error.description);
  //         alert(response.error.source);
  //         alert(response.error.step);
  //         alert(response.error.reason);
  //         alert(response.error.metadata.order_id);
  //         alert(response.error.metadata.payment_id);
  // });
 
      rzp1.open();
      e.preventDefault();
}
  
  
  
  
  
  return (<>
    
   
    <AnimatePresence>
    {userLoading ?
        <Loader /> :
      
        <div className="cartWrapper" key={'modal'}>
            
    <h2>MY SHOPPING CART</h2>
      {cart?.length>0? <section className="cart">
        <div className="products d-grid gap-3">
    {cart?.map(dat => {
      return <CartSingle key={dat._id} productData={dat}  />
       })}
        
        
        </div>
        <div className="checkout">
            <div className='text-center border py-2 rounded fw-bold'> FREE RETURNS ON ALL QUALIFYING ORDERS.</div>
            <div className='py-3 px-2 d-flex justify-content-between my-4' style={{background:'var(--greybg)'}}>APPLY A PROMO CODE <KeyboardArrowDown/></div>
            <div className='border-top pt-2 pb-3 border-bottom'>
                <h5 className='d-flex justify-content-between fs-6 text-secondary mb-1'><span>SUBTOTAL</span> <span>₹{total.toLocaleString('en-US')}</span></h5>
                <h5 className='d-flex justify-content-between fs-6 text-secondary'><span>SHIPPING COST</span> <span>₹0</span></h5>
                
                
            </div>
            <div className='d-flex justify-content-between my-4 gap-2'><h4>GRAND TOTAL <span className='fs-6 text-secondary'>PRICE INCLUDE GST</span></h4> <h5>₹{total.toLocaleString('en-US')}</h5></div>
            <Button width='100%' bg={'black'} color={'white'} height='60px' cb={PaymentHandler}>CHECKOUT</Button>
            <p style={{fontSize:'13px'}} className='mt-2' >By continuing, I confirm that I have read and accept the Terms and Conditionsand the Privacy Policy.</p>
        </div>
</section>: <div className='emptyCart'><span><ShoppingCartOutlinedIcon sx={{color:'#CCCCCC',fontSize:'200px'}}/> </span><h1>Your Shopping Cart is Empty</h1></div>}

        </div>
        
  }
      </AnimatePresence>
     
  </>
  )
}

export default Cart;