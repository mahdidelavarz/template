import React from "react";
import ArticleSlider from "./ArticleSlider";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";
function Articles() {
  const { t } = useTranslation();
  return (
    // <div className="w-full h-[70vh] pt-4 bg-[#83e5c766] px-4 flex flex-col items-center mb-40">
    //   <div className="w-full h-[70vh]  translate-y-20 flex flex-col items-center gap-6">
    //     <h2 className="text-2xl font-bold text-slate-600 ">
    //       News And Articles
    //     </h2>
    //     <div className="w-80 h-full shadow-md rounded-3xl bg-slate-100"></div>
    //   </div>
    // </div>
    <div className="w-full mb-40 h-[32rem] lg:h-[39rem] bg-gradient-to-l from-[#83e5c766] to-[#83e5e566] flex flex-col items-center py-2 relative">
      <div className="container md:pl-20 w-full text-slate-600">
        <div
          className="flex flex-col h-20 md:h-32 w-full md:items-center  justify-center gap-4"
          dir={i18n.language === "fa" ? "rtl" : "ltr"}
        >
          <span className="md:mr-20 text-xl font-bold md:text-2xl lg:text-[30px]">
            News And Articles
          </span>
          <span className="md:mr-20 hidden md:flex font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            eos?
          </span>
        </div>
      </div>
      <div className="w-full">
        <ArticleSlider />
      </div>
    </div>
  );
}

export default Articles;
