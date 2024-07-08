import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid } from "uuid";
import dat from "../../assets/puma";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swipper.css";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import OneProduct from "../oneProduct/OneProduct";
import { getProducts } from "../../../utils";

export default function ProductSlider() {

 const [data, setData] = useState(null)

  useEffect(()=>{
    (async () => {
      const res = await getProducts()
      // console.log(res);
     setData(res)
    })()
  },[])

  return (
    <>
      <h4>PUMA SPOTLIGHT</h4>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={"10px"}
        // slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2.5,
            slidesPerGroup: 1,
          },
          
          900: {
            slidesPerView: 4.5,
            slidesPerGroup: 1,
          },
          
        }}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper"
      >
        {data?.map((el) => { return ( <SwiperSlide key={uuid()}> <OneProduct singleProduct={el} /> </SwiperSlide> ); })}
        
        
      </Swiper>
    </>
  );
}
