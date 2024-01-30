import { slide as Menu } from "react-burger-menu";
import "./menu.css";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Search from "./Search";

const data = {
  Company: [
    { id: 1, title: "About Us" },
    { id: 2, title: "International Presence" },
    { id: 3, title: "Our Mission" },
    { id: 4, title: "Sustainability" },
    { id: 5, title: "Human Rights" },
    { id: 6, title: "Compliance" },
    { id: 7, title: "Scientific Awards" },
    { id: 8, title: "Annual Report" },
    { id: 9, title: "Boards" },
    { id: 10, title: "Code of Conduct" },
    { id: 11, title: "History" },
  ],
  Career: [
    {
      id: 1,
      title: "Careers at Eppendorf",
      accList: [
        { id: 1, title: "IT Professionals" },
        { id: 2, title: "Engineering Professionals" },
        { id: 3, title: "Professionals in the Field of Natural Sciences" },
        { id: 4, title: "Professionals in the Field of Natural Sciences" },
        { id: 5, title: "Professionals in Production" },
        { id: 6, title: "Apprentice , Students & Trainees" },
        { id: 7, title: "Internship & Final Papers" },
      ],
      icon: <BsChevronRight />,
    },
    {
      id: 2,
      title: "Working at Eppendorf",
      accList: [
        { id: 1, title: "Our Philosophy" },
        { id: 2, title: "Onboarding & Development" },
        { id: 3, title: "Benefits" },
        { id: 4, title: "IT" },
        { id: 5, title: "Product Development & Management" },
        { id: 6, title: "Production" },
        { id: 7, title: "Marketing" },
        { id: 8, title: "Sales & Service" },
        { id: 9, title: "Corporate Function" },
        { id: 10, title: "Finance & Supply Chain" },
        { id: 11, title: "Legal & Compliance , Quality" },
      ],
      icon: <BsChevronRight />,
    },
    { id: 3, title: "Our Application" },
    { id: 4, title: "Career Blog", icon: "url" },
    { id: 5, title: "Job Portal" },
  ],
  NewsMedia: [
    { id: 1, title: "Newsroom" },
    { id: 2, title: "Magazines" },
    { id: 3, title: "Events" },
    { id: 4, title: "Mobile Apps" },
    { id: 5, title: "Newsletter" },
    { id: 6, title: "Press Contact" },
  ],
};

const BurgerMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="lg:hidden relative">
      {openMenu ? (
        <RxCross2
          className="cursor-pointer text-2xl"
          onClick={() => setOpenMenu(false)}
        />
      ) : (
        <RxHamburgerMenu
          className="cursor-pointer text-2xl"
          onClick={() => setOpenMenu(true)}
        />
      )}
      <Menu left isOpen={openMenu}>
        <div className={`h-full bg-white dark:bg-main-gray `}>
          <div>
            <ul className="w-full flex flex-col  ">
              <div className="h-[75px] w-full top-0 bg-[#63809c] items-center justify-between">
                <Search />
              </div>

              <div className="flex flex-col  relative">
                {Object.entries(data).map(([key, value]) => {
                  //! we can only access the key here not outside of this bracket
                  //! so we should render the item menu here. after that we will be able to give the key to it as a prop
                  return <ItemMenu keyItem={key} />;
                })}

                <div className="grid item-center justify-between bg-[#63809c] h-[8rem] my-4 p-2">
                  <a
                    href="/"
                    className="no-underline block px-4 py-2 text-[1.2rem] text-white hover:text-blue-900"
                  >
                    Local Websites
                  </a>
                  <a
                    href="/"
                    className="no-underline block px-4 py-2 text-[1.2rem] text-white hover:text-blue-900"
                  >
                    Deutsch
                  </a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;


// -------------------------------------------------------

function ItemMenu({ keyItem }) {
  const [showMenu, setShowMenu] = useState(false);

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <button
        className="flex item-center justify-between"
        onClick={handleClick}
      >
        <a
          href="/"
          className="no-underline block px-4 py-2 text-2xl text-[#63809c] hover:text-blue-900 "
        >
          {keyItem}
        </a>
        {
          <BsChevronRight
            className={`w-4 h-4 mr-4 my-5 text-[#0035ac] dark:text-white transition duration-300 ease-out ${
              showMenu ? "rotate-180 " : "rotate-0"
            }`}
          />
        }
      </button>

      <SubMenuItem showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
}

// ---------------------------------------------------------------------------

function SubMenuItem({ showMenu, setShowMenu }) {
  return (
    <div
      className={`${
        showMenu
          ? "flex-col items-center justify-between bg-orange-300 absolute h-full w-full pl-5"
          : "bg-white"
      }`}
    >
      <button onClick={() => setShowMenu((showMenu) => !showMenu)}>
        <BsChevronLeft />
      </button>

      <div className="">
        {Object.values(data).map((key, value) => {
          return (
            <a
              key={key.id}
              href="#"
              className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
            >
              <div className=" ">
                {key.map((k) => (
                  <>{k.title}</>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
