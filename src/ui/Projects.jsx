import React from "react";
import { FaReact } from "react-icons/fa";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Projects() {
  const { t } = useTranslation();
  console.log(i18n.language);
  return (
    <section
      className="w-full h-auto gradient relative group py-6"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      <img
        src="./triangle.png"
        alt="triangle"
        className={`w-72 lg:w-96 absolute top-0 ${i18n.language === 'fa' ? 'left-0' : 'right-0'}`}
      />
      <div className="w-full flex justify-center">
        <div className="w-20 h-20 flex text-[#00e8c2] group-hover:w-24 duration-300 group-hover:h-24 text-4xl justify-center items-center rounded-[1.7rem] rotate-45 bg-slate-50 absolute -top-10 group-hover:-top-12 right shadow-md ">
          <FaReact className="group-hover:text-6xl group-hover:rotate-90 duration-300" />
        </div>
      </div>
      <div
        className="w-full flex flex-col lg:flex-row-reverse h-auto px-4 mt-16 lg:mt-0"
        dir={i18n.language === "fa" ? "rtl" : "ltr"}
      >
        <div className="lg:w-1/2 z-50 flex flex-col gap-12 items-center lg:justify-center">
          <h2 className="text-2xl lg:text-4xl font-bold text-slate-50">
            Performed projects on Sazmand
          </h2>
          <p className="text-slate-200 lg:text-xl">
            We offer key transformational services and innovation that bring
          </p>
          <button className="px-8 py-3 rounded-3xl lg:text-lg font-bold bg-slate-100 text-[#48cfcf] hover:bg-[#48cfcf] hover:text-slate-50 border-2 hover:border-slate-100 duration-300">
            Our Portfolios
          </button>
        </div>
        <div className="lg:w-1/2 flex flex-wrap gap-6 mt-10 lg:mt-0">
          <div className="w-40 h-40 bg-white"></div>
          <div className="w-20 h-20 bg-white"></div>
          <div className="w-60 h-60 bg-white"></div>
          <div className="w-96 h-48 bg-white"></div>
          <div className="w-20 h-20 bg-white"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
