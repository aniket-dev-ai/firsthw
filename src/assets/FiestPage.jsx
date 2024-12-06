import React from "react";
import log from "D:/Tasks/React/firsthw/src/Images/Logo.webp";

function FiestPage() {
  return (
    <div className="bg-[#E4E4E4] p-9 px-16 gap-10 flex">
      <div className="basis-[74%]">
        <h1 className="text-[6.4rem] font-[500] leading-[6rem] custom-font  ">
          Tyourning heads and conqyouering hearts
              <span className="inline-block relative top-7 ml-5">
            <img className="w-20 rotate" src={log}></img>
          </span>
        </h1>
      </div>
      <div className="basis-[25%] mb-5 flex flex-col justify-end gap-5 leading-5 items-start">
        <h2 className="w-[90%] ">
          NiceAtNoon is a boutique design studio specializing in branding and
          web design.
        </h2>
        <button className="bg-white text-sm font-semibold p-4 py-3 rounded-xl">
          View Projects 
        </button>
      </div>
    </div>
  );
}

export default FiestPage;
