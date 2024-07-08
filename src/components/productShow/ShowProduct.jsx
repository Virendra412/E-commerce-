import Button from "../Button/Button";
import "./product.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ReplayIcon from "@mui/icons-material/Replay";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { v4 as uuid } from "uuid";
import React, { useEffect, useState } from "react";
import Gallery from "./ImageGallery/Gallery";
import { Navigate, useLocation, useParams,useNavigate } from "react-router-dom";
import { addToCart, addToWishlist, getProductbyID } from "../../../utils";
import MyBackdrop from "../backdrop/MyBackdrop";
import { Price } from "../price/Price";
import { toast } from "react-toastify";
import { globalState } from "../context/Context";

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

const ShowProduct = () => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);
  const [productData, setProductData] = useState(null);
  const { setCart,user,token,setWishlist}=globalState()

  const location = useLocation();
  const { productId } = useParams();
  const [isOpen, setIsOpen] = useState(false)
  const [size, setSize] = useState(null)
  const navigate= useNavigate()
  console.log(size);

  useEffect(() => {
    if (!location.state) {
      (async () => {
        const res = await getProductbyID(productId);
        setProductData(res);
      })();
    } else {
      setProductData(location.state);
    }
  }, []);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setViewWidth(window.innerWidth);
    }, 300);

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);
  // console.log(viewWidth);
  
    
  async function addItemToCart(id) {
    if (!size) {
      toast.warning('Please select a size',);
      return
    }
    if (!user._id) {
      toast.warning('Please Login first to add item in cart',);
      return navigate('/account',{state:{from:location}})
    }
    setIsOpen(true)
    const res = await addToCart(token, productId,size.e,1)
    console.log(res);
    setCart(res)
    toast.success('Item added to cart');
    
    setSize(null)
    setIsOpen(false)
    return navigate('/cart')
        // console.log("button is working" + id);
  }
  

  async function addItemToWishlist(id) {
    if (!size) {
      toast.warning('Please select a size',);
      return
    }
    if (!user._id) {
      toast.warning('Please Login first to add item in cart',);
      return navigate('/account',{state:{from:location}})
    }
    setIsOpen(true)
    const res = await addToWishlist(token, productId,size.e,1)
    console.log(res);
    setWishlist(res)
    toast.success('Item added to Wishlist');
    
    setSize(null)
    setIsOpen(false)
    // return navigate('/wishlist')
        // console.log("button is working" + id);
    }

  return (<>
    <MyBackdrop isOpen={isOpen}/>
    <div className=" showProduct container-fluid">
      <h5 className="px-4 mt-3 d-flex align-items-center">
        <FiberManualRecordIcon
          sx={{ color: "rgb(180, 3, 3)", fontSize: "12px" }}
        />
        &nbsp; {productData?.category[0].toUpperCase()}
      </h5>
      <div className="productWrapper">
        {viewWidth > 1000 && (
          <div className="imageSection">
            {productData?.images.map((im) => {
              return <img key={uuid()} src={im} alt="" />;
            })}
          </div>
        )}
        {viewWidth < 1000 && <Gallery productData={productData} />}
        <div className="productInfo">
          <h1>{productData?.title}</h1>
          {/* <h4>{productData?.price}</h4> */}
          <Price>{productData?.price}</Price>
          <p>Price include GST</p>
          <div className="colorInfo">
            <h5>Color</h5>
            <p>PUMA White-PUMA White-Puma Team Gold</p>
            <div className="colorImage">
              <img src={productData?.images[0]} alt="" />
            </div>
          </div>
          <div className="sizeInfo py-4">
            <h5>Size</h5>
            <div className="sizeBox">
              {productData?.sizes.map((e,ind) => {
                return ( <span key={`uday${e}`} className={`sizeItems ${size?.ind==ind?'active':null}`} onClick={()=> setSize({e,ind})}>{e}</span> );
              })}
            </div>
          </div>

          <div className="buyButtons d-flex gap-3 py-4">
            <div className="quantity align-self-lg-start d-flex" > 1 <KeyboardArrowDownIcon /> </div>
            <div className="buyButtons d-flex flex-column gap-3 w-100"  >
              <Button bg="black" color="white" width="100%" height="60px" cb={()=>{addItemToCart(productData?._id)}}> ADD TO CART </Button>
              <Button color="black" border="1px solid black" bg='#E6E6E6' width="100%" height="60px" cb={()=>{addItemToWishlist(productData?._id)}}  > <FavoriteBorderIcon /> ADD TO WISHLIST </Button>
            </div>
          </div>
          <h5> <ReplayIcon /> Free returns on all qualifying orders. </h5>
          <div className="policy my-5">
            <h5>Shipping and Returns</h5>
            <p>
              Free return for all qualifying orders within{" "}
              <span className="text-dark fw-bold">
                14 days of your order delivery date
              </span>
              . Visit our Return Policy for more information.
            </p>
            <p> For any queries, please contact Customer Service at 080-35353535 or via customercareindia@puma.com . </p>
          </div>
        </div>
      </div>

      <div className="productStory">
        <div className="story">
          <h5>Product Story</h5>
          <p>{productData?.description}</p>
        </div>

        <div className="details">
          <h5>Details</h5>
          <ul>
            {productData?.details.map((e) => (
              <li key={uuid()}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default ShowProduct;
