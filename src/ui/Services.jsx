import React, { useEffect, useState } from "react";
import axios from "axios";
import { CgWebsite } from "react-icons/cg";
import createEmptyArray from "../utils/createArray";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
function Services() {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/services")
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section
      className="w-full h-auto bg-gradient-to-b from-[#DAE3EB] grid grid-cols-12 bg-opacity-10 gap-y-10 py-20"
      dir={i18n.language === "fa" ? "rtl" : "ltr"}
    >
      {services.map((service) => {
        return (
          <div
            className="group col-span-12 lg:col-span-6 h-auto flex flex-col lg:flex-row items-center lg:justify-center p-4 gap-x-4"
            key={service.id}
          >
            <div className="w-32 h-32 flex justify-center items-center text-[#551487] rounded-full group-hover:rounded-md group-hover:w-20 bg-[rgba(85,20,135,0.1)] group-hover:bg-[#80bccb] group-hover:bg-opacity-30 transition-all duration-300">
              <CgWebsite
                className={`group-hover:text-[#009BC2] ${
                  i18n.language === "en" ? "rotate-y-90" : "rotate-y-180"
                } duration-300 text-[4rem] group-hover:text-[5rem]`}
              />
            </div>
            <div className="flex flex-col gap-2 my-4 max-w-[26rem] items-center ">
              <h2 className="text-3xl text-[#551487]">
                {i18n.language === "en" ? service.title.en : service.title.fa}
              </h2>
              <p className="text-lg text-gray-400 group-hover:text-gray-700 duration-300 transition-all">
                {i18n.language === "en"
                  ? service.description.en
                  : service.description.fa}
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
