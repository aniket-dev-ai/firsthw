import React, { useState } from "react";
import img from "D:/Tasks/React/firsthw/src/Images/img1.jpg";
import img2 from "D:/Tasks/React/firsthw/src/Images/img1Hover.jpg";

function HoverImg() {
  const [isHovered, setIsHovered] = useState("opacity-0");

  const handleMouseEnter = () => {
    setIsHovered("opacity-100");
    console.log("Mouse Entered");
  };

  const handleMouseLeave = () => {
    setIsHovered("opacity-0");
    console.log("Mouse Left");
  };

  return (
    <div className="px-[5%] flex items-center my-7 justify-center">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[90vw] overflow-hidden relative rounded-[3rem] transition-all duration-500 hover:rounded-[8rem]"
      >
        <img
          className="object-cover h-[85vh] w-[90vw] hover:rounded-[8rem] hover:scale-125 transition-all duration-500 rounded-[3rem]"
          src={img}
          alt="Image 1"
        />

        <img
          className={`h-[60%] w-[30%] object-cover top-[20%] left-[35%] absolute z-10 transition-opacity duration-500 rounded-[3rem] ${isHovered}`}
          src={img2}
          alt="Image 2"
        />
      </div>
    </div>
  );
}

export default HoverImg;
