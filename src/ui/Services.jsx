import React from "react";
import { CgWebsite } from "react-icons/cg";
import createEmptyArray from "../utils/createArray";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Services() {
  const { t } = useTranslation();
  return (
    <section
      className="w-full h-auto bg-gradient-to-b from-[#DAE3EB] grid grid-cols-12 bg-opacity-10 gap-y-10 py-20"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      {createEmptyArray(6).map((item) => {
        return (
          <div className="group col-span-12 lg:col-span-6 h-auto flex flex-col lg:flex-row items-center lg:justify-center p-4 gap-x-4">
            <div className="w-32 h-32 flex justify-center items-center text-[#551487] rounded-full group-hover:rounded-md group-hover:w-20 bg-[rgba(85,20,135,0.1)] group-hover:bg-[#80bccb] group-hover:bg-opacity-30 transition-all duration-300">
              <CgWebsite className={`group-hover:text-[#009BC2] ${i18n.language === 'en' ? 'rotate-y-90' : 'rotate-y-180'} duration-300 text-[4rem] group-hover:text-[5rem]`} />
            </div>
            <div className="flex flex-col gap-2 my-4 max-w-[26rem] items-center ">
              <h2 className="text-3xl text-[#551487]">Website Development</h2>
              <p className="text-lg text-gray-400 group-hover:text-gray-700 duration-300 transition-all">
                Website development with the newest technologies in the world is
                our expertise. We help you to present your services online.
              </p>
              <button className="duration-300 transition-all px-6 py-2 group-hover:shadow-md shadow-[#6d567f] rounded-full text-[#551487]">
                More
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Services;
