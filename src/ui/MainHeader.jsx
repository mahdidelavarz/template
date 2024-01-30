import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";
function MainHeader() {
  const { t } = useTranslation();
  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  return (
    <section className="w-full lg:h-[90vh] flex lg:items-center  mt-40 container flex-col lg:flex-row gap-6" dir={i18n.language === 'fa' ? 'rtl' : 'ltr'}>
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex justify-center items-center">
        <img
          className="object-cover"
          src="../../public/How-to-Become-a-Freelancer-from-Scratch.png"
          alt="main"
        />
      </div>
      <div className="w-full lg:w-1/2 h-auto lg:h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center ">
          <h1 className="text-gray-400 text-xl">{t("hello")}</h1>
          <h2 className="text-4xl font-extrabold pb-4 pt-10 text-[#009BC2]">
            {t("sazmand")}
          </h2>
          <h2 className="text-3xl py-6 font-bold text-gray-500 max-w-[27rem]">
            <Typewriter
              words={[
                "Executor of Enterpris",
                "Executor of Online Shopping",
                "Mobile Application DevelopmentAndroid & iOS",
                "Focus on your ideas!",
              ]}
              loop={3}
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1700}
              onLoopDone={handleDone}
              onType={handleType}
            />
          </h2>
          <h3 className="text-gray-400 text-2xl">
            Design & Development Support
          </h3>
          <div className="my-8 flex gap-3 flex-wrap justify-center">
            <button className="px-10 py-3 border-2 rounded-3xl border-[#009BC2] hover:px-14 duration-300 hover:shadow-lg hover:shadow-gray-300">
              Services
            </button>
            <button className="px-10 py-3 border-2 rounded-3xl border-[#009BC2] hover:px-14 duration-300 hover:shadow-lg hover:shadow-gray-300">
              Projects
            </button>
            <button className="px-10 py-3 rounded-3xl bg-gradient-to-tr from-[#009BC2] to-[#7ab6c5] text-white hover:px-14 duration-300 hover:shadow-lg hover:shadow-gray-300">
              Start collaboration
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHeader;
