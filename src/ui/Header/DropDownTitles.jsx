import { useState } from "react";

const DropdownTitles = ({ dropDownProps }) => {
  const [dropDownInItems, setDropDownInItems] = useState([]);
  const getItems = (prop) => {
   setDropDownInItems(prop.content)
    };
  return (
    <div className="h-[75vh] hidden peer-hover:flex hover:flex w-full bg-gray-100 drop-shadow-lg absolute top-40 left-20 border-t max-w-[1450px] px-14 py-6 z-70">
      <div className="w-[20rem] h-auto flex flex-col gap-4 border-r border-slate-400 items-start z-70">
        {dropDownProps.map((prop , index) => {
          return (
            <div className=" text-header-links peer mt-4  inline" key={index}>
              <span
              
                className="w-72 hover:border-b border-header-links  py-2 cursor-pointer "
                onMouseOver={() => getItems(prop)}
              >
                {prop.title}
                {prop.icon}
              </span>
            </div>
          );
        })}
        <div className="w-[60rem] hidden peer-hover:flex hover:flex h-[70vh] absolute top-8 left-40 flex-col gap-4 pl-60 items-start">
         {dropDownInItems?.map((item , index)=>{
          return <span className="text-header-links cursor-pointer hover:border-b border-header-links  py-2 " key={index}>{item.title}</span>
         })}
        </div>
      </div>
    </div>
  );
};

export default DropdownTitles;
