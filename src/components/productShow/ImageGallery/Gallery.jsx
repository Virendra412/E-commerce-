import React from "react";
import "./gallery.css";
import { v4 as uuid } from "uuid";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

export default function Gallery({ productData, showinfo = false,slidesPerView=1.5 }) {
  return (
    <>
      
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={"0px"}
        // slidesPerGroupSkip={2}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        // breakpoints={{ //   900: { //     slidesPerView: 4.5, //     slidesPerGroup: 1, //   }, // }}
        navigation={true}
        scrollbar={{ draggable: true }}
        modules={[Keyboard, Scrollbar, Navigation]}
        className="gallerySlider w-100"
      >
        {productData?.images.map((im) => {
          return (
            <SwiperSlide key={uuid()}>
              {" "}
              <img src={im} alt="" />{" "}
            </SwiperSlide>
          )
        })}
      </Swiper>

      {showinfo && 
        <div className="gal_info d-flex justify-content-between">
          <h5>{productData?.title}</h5>
          <div>
            
            <h5 className="text-danger mb-0">{productData?.price}</h5>{" "}
            <h5 className="text-body-secondary">
              <del>₹6,199</del>
            </h5>
          </div>
        </div>
        }
        
    </>
  );
}
