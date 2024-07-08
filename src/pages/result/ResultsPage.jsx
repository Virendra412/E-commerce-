import React, { useEffect, useRef, useState } from "react";
import Gallery from "../../components/productShow/ImageGallery/Gallery";
import "./result.css";
import MainSlider from "../mainSlider/MainSlider";
import { Link, useLocation } from "react-router-dom";
import { getSearchResult, pathspilter } from "../../../utils";
import LoaderComponent from "../../components/loader/LoaderComponent";
import Skeleton from '@mui/material/Skeleton';
import CssLoader from "../../components/AnimatedLoader/CssLoader";


export default function ResultsPage({ data }) {
  const [result, setResult] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true)
  const { pathname, state={} }  = useLocation();
  const [page, setPage] = useState(12);
  const [offestLoading, setOffestLoading] = useState(true)
   const productItem=useRef()
  // console.log(pathname,state);

  useEffect(() => {
    (async () => {
      setIsDataLoading(true)
      const response = await getSearchResult(pathname);
      setResult(response);
      setIsDataLoading(false)
    })();
    setPage(12);
  }, [pathname]); /// getting Data

  useEffect(() => {
    const handleScroll = () => {
      const footerHeight = document
        .querySelector("footer")
        .getBoundingClientRect().height;

      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - footerHeight + 80) {
        
          setPage((prev) => prev + 12);
        
        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  if (productItem.current) {
    console.log(productItem.current.getBoundingClientRect());
  }

  return (
    <>
     <LoaderComponent isLoading={isDataLoading}>
      <div className="path">{pathspilter(pathname).map(e => <span>{e}</span>)}</div>
      <h5 style={{marginInline:'2%'}}>{result?.length } PRODUCTS</h5>
      <div className="resultWrapper">
        {result?.map((p, ind) => {
          if (ind < page) {
            // console.log(p);
            return ( <div className="product_items" ref={productItem}> <Link to={`/product/${p._id}`} state={p}><MainSlider p={p} /> </Link></div> );
          }
        })}
        </div>
        {/* {offestLoading && <CssLoader/>} */}
        
        </LoaderComponent> 
    </>
  );
}
