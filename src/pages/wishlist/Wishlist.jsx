
import React from 'react'
import './wishlist.css'

import WishlistItem from './WishlistItem';
import { globalState } from '../../components/context/Context';
import LoaderComponent from '../../components/loader/LoaderComponent';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



const Wishlist = () => {
    const { wishlist,userLoading } = globalState()
    console.log(wishlist);
    return (
      <LoaderComponent isLoading={userLoading}>
        {wishlist?.length > 0 ?
        <div className='wishlist'>
        <div className="wishlist_wrapper">
            <div className="wishlist_header d-flex justify-content-between align-items-center border-bottom pb-3">
                <h4 className='fw-normal'>MY WISHLIST</h4>
                <h5 className='fw-normal'>{wishlist.length} items</h5>
            </div>
            {wishlist?.map(pro => {
              return <WishlistItem data={pro}/>
          })}
       </div>
    </div>:<div className='emptyWishlist'><span><FavoriteBorderIcon sx={{color:'#CCCCCC',fontSize:'200px'}}/> </span><h1>Your Wishlist is Empty</h1></div>}
      
      </LoaderComponent>
  )
}


export default Wishlist;