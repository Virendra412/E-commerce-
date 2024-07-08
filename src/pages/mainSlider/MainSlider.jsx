import "./mainSlider.css";


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuid } from "uuid";
import dat from "../../assets/puma";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
//   import OneProduct from "../oneProduct/OneProduct";

export default function MainSlider({ showinfo = "true",p }) {
  return (
    <div className="mainSlider_wrapper position-relative">
      {!!p.discount && <span className="discount position-absolute px-3 text-light fw-bold py-1 z-3" style={{background:'#AC1E1E',borderRadius:'2px',fontSize:'12px'}}>-{p.discount}%</span>}
          
      <Swiper
        slidesPerView={1}
        //   spaceBetween={"10px"}
        // slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        //   breakpoints={{
        //     900: {
        //       slidesPerView: 4.5,
        //       slidesPerGroup: 1,
        //     },
        //   }}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="main_slider"
      >
        {p.images.map((im) => {
          return (
            <SwiperSlide key={uuid()}><img src={im} alt="" /></SwiperSlide>
          );
        })}
      </Swiper>


      {showinfo && (
        <div className="gal_info d-flex justify-content-between gap-2 py-2">
          <h6>{p.title}</h6>
          <div >
            <h6 className="text-danger mb-0">₹{parseInt(p.price).toLocaleString('en-US')}</h6>{" "}
            {!!p.discount && <h6 className="text-body-secondary">
              <del>₹{parseInt(p.original_price).toLocaleString('en-US')}</del>
            </h6>}
          </div>
        </div>
      )}
    </div>
  );
}
