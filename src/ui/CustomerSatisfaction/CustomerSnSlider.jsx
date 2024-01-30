import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { Autoplay, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function CustomerSnSlider() {
  const swiperRef = useRef(null);
  return (
    <div className="w-full px-4 md:px-10 lg:px-40 mt-16 relative">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="hidden prevEl2 lg:flex justify-center items-center absolute w-12 h-12  top-36 right-12 z-50  bg-white rounded-xl opacity-80 group "
      >
        <FaChevronRight className="text-[#107e7e66] group-hover:text-[#157373e2] duration-200" />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="hidden nextEl2 lg:flex justify-center items-center absolute w-12 h-12  top-36 left-12 z-50  bg-white rounded-xl opacity-80 group"
      >
        <FaChevronLeft className="text-[#107e7e66] group-hover:text-[#157373e2] duration-200" />
      </button>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        ref={swiperRef}
        navigation={{
          prevEl: ".prevEl2",
          nextEl: ".nextEl2",
        }}
        breakpoints={{
          430: {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1760: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        // loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-96 bg-slate-300"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomerSnSlider;
