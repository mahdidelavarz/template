import React from "react";
import { FaReact } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import CtsFooterSlider from "./CtsFooterSlider";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
function CtsFooter() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full h-fit relative flex justify-center"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <img
        src="./customer.jpg"
        alt="customers"
        className="opacity-10 h-full absolute top-0 right-0 w-full object-cover"
      />
      <div className="w-full opacity-60 h-full absolute top-0 right-0 bg-gradient-to-l from-teal-700 to-emerald-600"></div>
      <div className="w-20 h-20 flex text-[#00e8c2] duration-300 justify-center items-center rounded-[1.7rem] rotate-45 bg-slate-50 absolute -top-10 right shadow-md ">
        <FaReact className="text-5xl group-hover:rotate-90 duration-300" />
      </div>
      <div className="flex flex-col w-full items-center gap-4 mt-20 z-50 lg:flex-row">
        <div className="flex flex-col gap-6 items-center lg:px-10">
          <div className="flex gap-2 text-xl lg:text-3xl text-yellow-500 ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-yellow-500">
            Customer Satisfaction
          </h2>
          <p className="text-slate-50 text-lg lg:text-xl leading-loose">
            Your smile and satisfaction is much more important than the other
            things We try and do our best to make you satisfied from the final
            product We make complete features.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-96">
          <CtsFooterSlider />
        </div>
      </div>
    </div>
  );
}

export default CtsFooter;
