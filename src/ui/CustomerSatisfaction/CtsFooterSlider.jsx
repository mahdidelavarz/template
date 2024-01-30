import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

function CtsFooterSlider() {
  return (
    <div className="w-full h-full p-2">
      <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide className="flex justify-center py-2 border border-green-800 rounded-2xl">
          <div className="w-20 h-20 bg-white rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center py-2 border border-green-800 rounded-2xl">
          <div className="w-20 h-20 bg-white rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center py-2 border border-green-800 rounded-2xl">
          <div className="w-20 h-20 bg-white rounded-full"></div>
        </SwiperSlide>
        <SwiperSlide className="flex justify-center py-2 border border-green-800 rounded-2xl">
          <div className="w-20 h-20 bg-white rounded-full"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CtsFooterSlider;
