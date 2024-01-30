import React from "react";
import CustomerSnSlider from "./CustomerSnSlider";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

function CustomerSatisfaction() {
  const {t} = useTranslation();
  return (
    <div className="w-full flex flex-col items-center min-h-[1000px] bg-[#d0e6ea] pt-12 bg-opacity-70 text-center relative overflow-hidden">
      <h2 className="text-2xl text-[#009bc2] font-bold " dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
        Brands we already created and customers have trusted ...
      </h2>
      <CustomerSnSlider />
      <div className="w-[250px] h-[250px] absolute bottom-0 translate-y-[50%] rounded-full border-2 border-slate-400">
        <div className="w-full h-full show rounded-full absolute bottom-0 "></div>
        <span className="w-[60px] h-[60px] anime1 bg-white shadow-md absolute top-[40px] -left-[20px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime3 bg-white shadow-md absolute -top-[25px] left-[90px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime2 bg-white shadow-md absolute top-[30px] left-[200px] rounded-full"></span>
      </div>
      <div className="w-[500px] h-[500px] absolute bottom-0 translate-y-[50%] rounded-full border-2 border-slate-400">
        <div className="w-full h-full show1 rounded-full absolute bottom-0 "></div>
        <span className="w-[60px] h-[60px] anime2 bg-white shadow-md absolute top-[80px] left-[10px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime3 bg-white shadow-md absolute -top-[10px] left-[120px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime1 bg-white shadow-md absolute top-[70px] left-[420px] rounded-full"></span>
      </div>
      <div className="w-[750px] h-[750px] absolute bottom-0 translate-y-[50%] rounded-full border-2 border-slate-400">
        <div className="w-full h-full show2 rounded-full absolute bottom-0 "></div>
        <span className="w-[60px] h-[60px] anime2 bg-white shadow-md absolute top-[260px] -left-[20px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime1 bg-white shadow-md absolute top-[80px] left-[80px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime3 bg-white shadow-md absolute -top-[20px] left-[420px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime3 bg-white shadow-md absolute top-[240px] left-[700px] rounded-full"></span>
      </div>
      <div className="w-[1100px] h-[1100px] absolute bottom-0 translate-y-[50%] rounded-full border-2 border-slate-400">
        <div className="w-full h-full show3 rounded-full absolute bottom-0 "></div>
        <span className="w-[60px] h-[60px] anime1 bg-white shadow-md absolute top-[380px] -left-[10px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime2 bg-white shadow-md absolute top-[100px] left-[150px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime1 bg-white shadow-md absolute top-[120px] left-[900px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime3 bg-white shadow-md absolute top-[380px] left-[1050px] rounded-full"></span>
      </div>
      <div className="w-[1400px] h-[1400px] absolute bottom-0 translate-y-[50%] rounded-full border-2 border-slate-400">
        <div className="w-full h-full show4 rounded-full absolute bottom-0 "></div>
        <span className="w-[60px] h-[60px] anime2 bg-white shadow-md absolute top-[280px] left-[85px] rounded-full"></span>
        <span className="w-[60px] h-[60px] anime1 bg-white shadow-md absolute top-[270px] left-[1250px] rounded-full"></span>
      </div>
    </div>
  );
}

export default CustomerSatisfaction;
