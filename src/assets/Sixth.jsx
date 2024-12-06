import React from "react";

function Sixth() {
  return (
    <div className="bg-[#F4F4F1] pb-32">
      <div className="bg-[#F4F4F1] relative">
        <div className="text-center">Our Belief</div>
        <div className="text-9xl font-bold w-[70%] pt-9 ml-[15%] leading-[7rem] uppercase text-center ">
          Brands just want <br></br> To have fun
        </div>
        <div>
          <img
            className="bg-black rounded-full h-32 absolute right-32 rotate bottom-[-1rem]"
            src="https://img.icons8.com/?size=100&id=7868&format=png&color=20CD85"
          ></img>
        </div>
      </div >
      <img className="w-[90%] ml-[5%] mt-24 h-[120vh] rounded-[6rem] object-cover" src="https://assets-global.website-files.com/6454cbf2dcc426c6ec47ef06/64cabd4824cecf2c23abed79_BRAND%20STORY%20SESSIES_Home-Nan.webp"></img>
      <div className="flex items-center gap-5 mt-4 ">
            <button className="ml-[5%] rounded-lg px-3 text-white py-1 bg-[#A3A4A7]">Brand Story sessies </button>
        <p className="text-[#A3A4A7] text-sm font-bold">Samen ontdekken we jouw merkverhaal</p>
      </div>
    </div>
  );
}

export default Sixth;
