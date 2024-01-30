import { LuSearch } from "react-icons/lu";
import { useEffect, useState } from "react";
import DropdownTitles from "./DropDownTitles";
import { FiChevronRight } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
  const { t } = useTranslation();
  const [dropDownProps, setDropDownProps] = useState([]);
  const [searchZone, setSearchZone] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 101) setHideHeader(true);
      else setHideHeader(false);
    });
  }, []);

  return (
    <section
      className={`container w-full flex flex-col items-center fixed top-0 shadow-md z-[100] bg-white transition-all duration-300 ${
        hideHeader ? "-translate-y-20" : "translate-y-0"
      }`}
    >
      <div className="w-full h-20 lg:flex justify-between hidden ">
        <div className="w-[35rem] h-full flex justify-between items-center px-16 text-base">
          <h2 className="cursor-pointer text-text-black">
            Eppendorf Corporate
          </h2>
          <span className="text-text-gray cursor-pointer hover:text-text-black transition-all duration-300">
            Local Website
          </span>
          <span className="h-5 border border-solid border-gray-400 cursor-pointer"></span>
          <span className="text-text-gray cursor-pointer hover:text-text-black transition-all duration-300">
            Deutsch
          </span>
        </div>
        <div className="w-96 h-full flex justify-end items-center px-16">
          {searchZone ? (
            <div className="w-full flex px-2 rounded-lg border items-center">
              <input
                type="text"
                className="w-60 outline-none p-2"
                placeholder="Search ..."
              />
              <LuSearch className="text-3xl text-text-gray cursor-pointer hover:text-text-black transition-all duration-300" />
            </div>
          ) : (
            <LuSearch
              className="text-3xl text-text-gray cursor-pointer"
              onClick={() => setSearchZone(true)}
            />
          )}
        </div>
      </div>
      <div className="w-full max-w-[1450px] lg:h-20 h-16  flex justify-between lg:px-16 px-4  items-center">
        <BurgerMenu />
        <div className="w-[32rem] h-full hidden lg:flex ">
          <ul className="flex w-full justify-between text-xl h-full">
            <li
              className="text-header-links cursor-pointer peer flex h-full items-center hover:underline"
              onMouseOver={() =>
                setDropDownProps([
                  { title: "Sustainability" },
                  {
                    title: "Location",
                    icon: <FiChevronRight className="inline text-2xl ml-2" />,
                    content: [{ title: "Oldenburg" }, { title: "Leipzig" }],
                  },
                  { title: "Human Rights" },
                  {
                    title: "Compliance",
                    icon: <FiChevronRight className="inline text-2xl ml-2" />,
                    content: [
                      { title: "Compliance Line" },
                      { title: "Code of Conduct" },
                    ],
                  },
                  {
                    title: "Scientific Awards",
                    icon: <FiChevronRight className="inline text-2xl ml-2" />,
                    content: [
                      { title: "Young European Investigation" },
                      { title: "Science Prize for Neurobiology" },
                    ],
                  },
                  { title: "Annual" },
                  { title: "History" },
                ])
              }
            >
              Company
            </li>
            <li
              className="text-header-links cursor-pointer peer flex h-full items-center  hover:underline"
              onMouseOver={() =>
                setDropDownProps([
                  {
                    title: "Careers at Eppendorf",
                    icon: <FiChevronRight className="inline text-2xl ml-2" />,
                    content: [
                      { title: "IT Professionals" },
                      { title: "Engineering Professionals" },
                      { title: "Professionals in the Field of Economics" },
                      {
                        title: "Professional in the Field of Natural Sciences",
                      },
                      { title: "Professional in Production" },
                      { title: "Apprentices , Students & Trainees" },
                      { title: "Internship & Final Papers" },
                    ],
                  },
                  {
                    title: "Working at Eppendorf",
                    icon: <FiChevronRight className="inline text-2xl ml-2" />,
                    content: [
                      { title: "Our Philosophy" },
                      { title: "Onboarding & Development" },
                      { title: "Benefits" },
                      { title: "IT" },
                      { title: "Product Development & Management" },
                      { title: "Production" },
                      { title: "Marketing" },
                      { title: "Sales & Service" },
                      { title: "Corporate Functions" },
                      { title: "Finance & Supply Chain" },
                      { title: "Legal & Compliance , Quality" },
                    ],
                  },
                  { title: "Our Application Process" },
                  { title: "Career blog" },
                  { title: "Job Portal" },
                ])
              }
            >
              Career
            </li>
            <li
              className="text-header-links cursor-pointer peer flex h-full items-center hover:underline"
              onMouseOver={() =>
                setDropDownProps([
                  { title: "Newsroom" },
                  {
                    title: "Magazines",
                    icon: <FiChevronRight className="inline text-2xl ml-2" />,
                    content: [
                      { title: "Bio News" },
                      { title: "Off the Bench" },
                    ],
                  },
                  { title: "Events" },
                  { title: "Mobile Apps" },
                  { title: "Newsletter" },
                  { title: "Press Contact" },
                  { start: "left-20" },
                ])
              }
            >
              News & Media
            </li>
            <li className="text-header-links cursor-pointer flex h-full items-center hover:underline">
              Contact
            </li>
            <DropdownTitles dropDownProps={dropDownProps} />
          </ul>
        </div>
        <div className="flex gap-2">
          <div>
            {i18n.language === "fa" ? (
              <button
                className="px-6 py-2 bg-blue-400 rounded-xl text-slate-50"
                onClick={() => i18n.changeLanguage("en")}
              >
                English
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-blue-400 rounded-xl text-slate-50"
                onClick={() => i18n.changeLanguage("fa")}
              >
                فارسی
              </button>
            )}
          </div>
          <h1 className="w-40 h-10 border-2 flex justify-center items-center rounded-xl">
            Logo
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Header;
