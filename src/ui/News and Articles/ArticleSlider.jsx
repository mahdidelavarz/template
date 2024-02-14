import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { CiCalendarDate, CiUser } from "react-icons/ci";
import { Autoplay, Navigation } from "swiper/modules";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
const ArticleSlider = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3030/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const swiperRef = useRef(null);
  return (
    <div className="container lg:mt-10 mt-4 lg:px-24 2xl:relative">
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className="prevEl flex justify-center items-center absolute w-12 h-40 lg:w-12 lg:h-12 top-60 lg:top-72 2xl:top-52 right-0 lg:right-4 2xl:right-2  z-20  bg-white lg:rounded-2xl rounded-l-full opacity-80 group "
      >
        <FaChevronRight className="text-[#107e7e66] group-hover:text-[#157373e2] duration-200" />
      </button>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className="nextEl flex justify-center items-center absolute w-12 h-40 lg:w-12 lg:h-12 top-60 lg:top-72 left-0 lg:left-4 2xl:top-52 2xl:left-2  z-20  bg-white lg:rounded-2xl rounded-r-full opacity-80 group"
      >
        <FaChevronLeft className="text-[#107e7e66] group-hover:text-[#157373e2] duration-200" />
      </button>
      <Swiper
        ref={swiperRef}
        navigation={{
          prevEl: ".prevEl",
          nextEl: ".nextEl",
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
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1760: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, Navigation]}
      >
        {blogs.map((blog) => {
          return (
            <div className="w-full py-4">
              <SwiperSlide
                className="w-full h-auto rounded-3xl p-2"
                key={blog.id}
              >
                <div
                  className="w-auto h-full bg-slate-100  shadow-md shadow-slate-300  rounded-3xl flex flex-col items-center"
                  dir={i18n.language === "fa" ? "rtl" : "ltr"}
                >
                  <div className="w-full h-full flex flex-col items-center pt-4 px-4">
                    <img
                      src={blog.img}
                      alt={blog.title.en}
                      className="object-cover xl:w-full xl:h-64 xl:rounded-3xl"
                    />
                    <div className="w-full flex flex-col items-start mt-4 text-second-gray-text-web">
                      <h2 className="text-slate-600 h-12 md:h-8">
                        {i18n.language === "fa" ? blog.title.fa : blog.title.en}
                      </h2>
                      <p className="font-Ray-Medium mt-2 h-32 md:h-28 text-sm md:text-base">
                        {i18n.language === "fa"
                          ? blog.description.fa
                          : blog.description.en}
                      </p>
                    </div>
                    <div className="w-full h-auto flex justify-start gap-8 text-[#277f75]">
                      <div className="flex gap-2 items-center">
                        <CiUser />
                        <span className="text-sm md:text-base">
                          {i18n.language === "fa"
                            ? blog.writer.fa
                            : blog.writer.en}
                        </span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <CiCalendarDate />
                        <span className="text-sm md:text-base">
                          {blog.buildDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full h-14 flex text-[#277f75] justify-center items-center gap-2 mt-2 md:mt-4 border-t border-solid   transition-all duration-300 rounded-b-2xl hover:bg-[#27c3b1] hover:text-slate-50">
                    <i className="bi bi-search"></i>
                    <span className="font-Ray-Medium">
                      {i18n.language === "en"
                        ? "Study The Article"
                        : "مطالعه ی مقاله"}
                    </span>
                  </button>
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ArticleSlider;
