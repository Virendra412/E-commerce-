import React, { useEffect, useState } from "react";
import "./search.css";
import MainSlider from "../mainSlider/MainSlider";
import { Link, useLocation } from "react-router-dom";

import { getProducts, getSearchResult, pathspilter, queryParamsExtractor } from "../../../utils";
import LoaderComponent from "../../components/loader/LoaderComponent";
import axios from "axios";


export default function SearchPage({ data }) {
  const [result, setResult] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true)
  const { pathname, state={},search }  = useLocation();
  const [page, setPage] = useState(12);
  
  
  

  useEffect(() => {
    (async () => {
      setIsDataLoading(true)
      const response = await axios.post(`${import.meta.env.VITE_SERVER}/product/search`,queryParamsExtractor(search))
      // console.log(response);
      setResult(response.data);
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

  return (
    <>
     <LoaderComponent isLoading={isDataLoading}>
      <div className="path">{pathspilter(pathname).map(e => <span key={e}>{e}</span>)}</div>
      <h5 style={{marginInline:'2%'}}>{result?.length } PRODUCTS</h5>
      <div className="resultWrapper">
        {result?.map((p, ind) => {
          if (ind < page) {
            // console.log(p);
            return ( <div key={p._id} className="product_items"> <Link to={`/product/${p._id}`} state={p}><MainSlider p={p} /> </Link></div> );
          }
        })}
        </div>
        </LoaderComponent> 
    </>
  );
}
