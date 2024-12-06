import React, {useState} from "react";


import img1 from "D:/Tasks/React/firsthw/src/Images/twoimg1.jpg";
import img2 from "D:/Tasks/React/firsthw/src/Images/twoimg2.jpg";
import imgHover from "D:/Tasks/React/firsthw/src/Images/twoimghover.jpg";
import imgHover2 from "D:/Tasks/React/firsthw/src/Images/twoimghover2.jpg";

function TwoCards() {
  const [isHovered, setIsHovered] = useState("opacity-0");

  const handleMouseEnter = () => {
    setIsHovered("opacity-100");
    console.log("Mouse Entered");
  };

  const handleMouseLeave = () => {
    setIsHovered("opacity-0");
    console.log("Mouse Left");
  };
  const [isHovered1, setIsHovered1] = useState("opacity-0");

  const handleMouseEnter1 = () => {
    setIsHovered1("opacity-100");
    console.log("Mouse Entered");
  };

  const handleMouseLeave1 = () => {
    setIsHovered1("opacity-0");
    console.log("Mouse Left");
  };
  return (
    <div className="pb-16">
    <div className="flex basis-1/2 p-5 px-12 ">
      <div className=" w-[45vw] relative flex flex-col p-4">
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-[70vh] transition-all duration-500 hover:rounded-[6rem] overflow-hidden"
        >
          <img
            className="h-[70vh] transition-all duration-500 rounded-3xl hover:rounded-[6rem] hover:scale-110 object-cover"
            src={img1}
          ></img>
          <img
            className={`absolute top-16 h-[45%] transition-opacity duration-500 rounded-[4rem] object-cover left-32 w-[55%] ${isHovered}`}
            src={imgHover}
          ></img>
        </div>
        <p className="text-gray-400 mt-4">Gaaf Creaties</p>
        <p className="font-semibold text-xl">
          Creating mood-boosting experiences
        </p>
        <div className="flex gap-3 mt-4">
          <button className="border text-[0.6rem] py-[0.35rem] font-semibold px-3 uppercase border-black rounded-lg">
            Brand Story
          </button>
          <button className="border text-[0.6rem] py-[0.35rem] font-semibold px-3 uppercase border-black rounded-lg">
            Merkidentiteit
          </button>
          <button className="border text-[0.6rem] py-[0.35rem] font-semibold px-3 uppercase border-black rounded-lg">
            Webdesign
          </button>
        </div>
      </div>
      <div className=" w-[45vw] flex flex-col p-4">
        <div onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1} className="relative hover:rounded-[7rem] overflow-hidden transition-all duration-500 h-[95vh]">
        <img className="h-[95vh] hover:rounded-[7rem] transition-all hover:scale-125 duration-500 w-full object-cover rounded-[4rem]" src={img2}></img>
        <img className={`absolute w-1/2 h-1/2 top-[20%] transition-opacity duration-500 rounded-[3rem] left-[20%] ${isHovered1}`} src={imgHover2}></img>
        </div>
        <p className="text-gray-400 mt-4">Don't Mind</p>
        <p className="font-semibold text-xl">Campaigners for eventful brands</p>
        <div className="flex gap-3 mt-4">
          <button className="border text-[0.6rem] py-[0.35rem] font-semibold px-3 uppercase border-black rounded-lg">
            Brand Story
          </button>
          <button className="border text-[0.6rem] py-[0.35rem] font-semibold px-3 uppercase border-black rounded-lg">
            Merkidentiteit
          </button>
          <button className="border text-[0.6rem] py-[0.35rem] font-semibold px-3 uppercase border-black rounded-lg">
            Webdesign
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white w-[40%] rounded-2xl ml-14 flex justify-between items-center px-8 py-4">
        <p className="font-semibold">Ook aan de slag met jouw merk?</p>
        <button className="border border-black font-semibold text-sm  rounded-2xl py-3 px-8">Lets Meet</button>
    </div>
    </div>
  );
}

export default TwoCards;
