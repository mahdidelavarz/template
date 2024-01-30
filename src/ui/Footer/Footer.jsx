import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div
      className="w-full h-auto pt-10"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-12 w-full h-auto gap-6 px-8">
        <div className="col-span-4 lg:col-span-2  text-2xl py-6 flex flex-col gap-2">
          <span className="font-bold">+6</span>
          <p className="text-lg text-slate-500">years of experience</p>
        </div>
        <div className="col-span-4 lg:col-span-2  text-2xl py-6 flex flex-col gap-2">
          <span className="font-bold">+200</span>
          <p className="text-lg text-slate-500">Web & app projects</p>
        </div>
        <div className="col-span-4 lg:col-span-2  text-2xl py-6 flex flex-col gap-2">
          <span className="font-bold">+10</span>
          <p className="text-lg text-slate-500">startups</p>
        </div>
        <div className="col-span-4 lg:col-span-2  text-2xl py-6 flex flex-col gap-2">
          <span className="font-bold">+30.000</span>
          <p className="text-lg text-slate-500">customer support</p>
        </div>
        <div className="col-span-4 lg:col-span-2  text-2xl py-6 flex flex-col gap-2">
          <span className="font-bold">+4.000.000</span>
          <p className="text-lg text-slate-500"> lines of coding</p>
        </div>
        <div className="col-span-4 lg:col-span-2  text-2xl py-6 flex flex-col gap-2">
          <span className="font-bold">+7.000.000</span>
          <p className="text-lg text-slate-500">view of websites</p>
        </div>
      </div>
      <div className="w-full h-auto flex flex-col  items-center justify-center">
        <img
          src="../../../public/wave.png"
          alt="wave"
          className="object-contain"
        />
        <div className="py-6 w-full lg:w-[70vw] flex flex-col lg:flex-row-reverse justify-between">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className=" font-bold lg:ml-4">Our Newsletters</h3>
            <div className="flex gap-2 mt">
              <input
                type="text"
                className="w-60 px-3 py-2 rounded-3xl bg-slate-200"
                placeholder="Your Name"
              />
              <button className="w-12 h-12 bg-slate-200 flex justify-center items-center text-slate-500 rounded-full">
                <FaArrowRightLong />
              </button>
            </div>
            <div className="flex gap-3 w-72 justify-between text-slate-400 text-3xl mt-4">
              <LiaTelegram className="cursor-pointer hover:text-4xl duration-200 hover:text-blue-500" />
              <FaInstagram className="cursor-pointer hover:text-4xl duration-200 hover:text-rose-500" />
              <IoLogoTwitter className="cursor-pointer hover:text-4xl duration-200 hover:text-blue-400" />
              <FaSquareFacebook className="cursor-pointer hover:text-4xl duration-200 hover:text-blue-700" />
              <FaGoogle className="cursor-pointer hover:text-4xl duration-200 hover:text-red-500" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="text-4xl my-4 mt-8 text-slate-500">
              Start Changes just now!
            </h2>
            <button className="flex justify-center py-2 px-8 bg-gradient-to-l from-blue-700 to-teal-500 text-slate-50 rounded-3xl">
              Start Collaboration
            </button>
          </div>
        </div>
        <div className="w-full h-40 bg-slate-100"></div>
      </div>
    </div>
  );
}

export default Footer;
