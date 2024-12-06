import React, { useState } from "react";

import img1 from "D:/Tasks/React/firsthw/src/Images/4img.jpg";
import img2 from "D:/Tasks/React/firsthw/src/Images/4img2.jpg";
import img3 from "D:/Tasks/React/firsthw/src/Images/4img3.jpg";
import img4 from "D:/Tasks/React/firsthw/src/Images/4img4.jpg";

function FifthPage() {
  const [ishover1, setishover1] = useState(false);
  const [ishover2, setishover2] = useState(false);
  const [ishover3, setishover3] = useState(false);
  const [ishover4, setishover4] = useState(false);

  function checkin1() {
    setishover1(true);
  }
  function checkin2() {
    setishover2(true);
  }
  function checkin3() {
    setishover3(true);
  }
  function checkin4() {
    setishover4(true);
  }

  function checkout1() {
    setishover1(false);
  }
  function checkout2() {
    setishover2(false);
  }
  function checkout3() {
    setishover3(false);
  }
  function checkout4() {
    setishover4(false);
  }
  return (
    <div className="bg-[#F4F4F1] pt-20">
      <div className="px-16 text-xs font-bold mb-6">Services</div>
      <div className="px-16 flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold w-[25%]">
          Zo onderscheiden we je van de norm
        </h1>
        <button className="bg-black text-white px-7 text-sm  py-3 rounded-xl">
          Lees Meer{" "}
        </button>
      </div>
      <div className="flex justify-center gap-5 text-white">
        <div
          onMouseEnter={checkin1}
          onMouseLeave={checkout1}
          className={`w-[20vw] transition-all duration-300  `}
        >
          <img
            className={`w-full h-[30vh] object-cover ${
              ishover1 ? "rounded-[4rem]" : "rounded-t-3xl"
            } transition-all duration-300  `}
            src={img1}
          ></img>
          <div
            className={`bg-[#AA81B7] rounded-b-3xl ${
              ishover1 ? "rounded-[4rem] rounded-b-[4rem]" : "rounded-b-3xl"
            } p-6 transition-all duration-300  `}
          >
            <h1 className="text-xl">Brand Story</h1>
            <p className="text-xs mt-10">
              NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van
              jargon en allergisch voor bureau
            </p>
          </div>
        </div>
        <div
          onMouseEnter={checkin2}
          onMouseLeave={checkout2}
          className="w-[20vw] rounded-3xl"
        >
          <img
            className={`w-full h-[30vh] rounded-t-3xl object-cover ${
              ishover2 ? "rounded-[4rem] rounded-t-[4rem]" : "rounded-t-3xl"
            } transition-all duration-300`}
            src={img2}
          ></img>
          <div
            className={`bg-black text-white rounded-b-3xl ${
              ishover2 ? "rounded-[4rem] rounded-b-[4rem]" : "rounded-b-3xl"
            } p-6 transition-all duration-300`}
          >
            <h1 className="text-xl">Merkidentitiet</h1>
            <p className="text-xs mt-10">
              NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van
              jargon en allergisch voor bureau
            </p>
          </div>
        </div>
        <div
          onMouseEnter={checkin3}
          onMouseLeave={checkout3}
          className="w-[20vw] rounded-3xl"
        >
          <img
            className={`w-full h-[30vh] rounded-t-3xl object-cover ${
              ishover3 ? "rounded-[4rem] rounded-t-[4rem]" : "rounded-t-3xl"
            } transition-all duration-300`}
            src={img3}
          ></img>
          <div
            className={`bg-[#36A96A] rounded-b-3xl p-6 ${
              ishover3 ? "rounded-[4rem] rounded-b-[4rem]" : "rounded-b-3xl"
            } p-6 transition-all duration-300`}
          >
            <h1 className="text-xl">Web Design</h1>
            <p className="text-xs mt-10">
              NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van
              jargon en allergisch voor bureau
            </p>
          </div>
        </div>
        <div
          onMouseEnter={checkin4}
          onMouseLeave={checkout4}
          className="w-[20vw] rounded-3xl"
        >
          <img
            className={`w-full h-[30vh] rounded-t-3xl object-cover ${
              ishover4 ? "rounded-[4rem] rounded-t-[4rem]" : "rounded-t-3xl"
            } transition-all duration-300`}
            src={img4}
          ></img>
          <div className={`bg-[#FA8A58] rounded-b-3xl p-6 ${
              ishover4 ? "rounded-[4rem] rounded-b-[4rem]" : "rounded-b-3xl"
            } transition-all duration-300`}>
            <h1 className="text-xl">A le Carte</h1>
            <p className="text-xs mt-10">
              NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van
              jargon en allergisch voor bureau
            </p>
          </div>
        </div>
      </div>
      <div className="ml-16 mt-8">
        <p className="w-[75%]  text-xl font-semibold">
          NiceAtNoon is fris, jong en een tikkeltje eigenzinnig. Wars van jargon
          en allergisch voor bureau blabla, gaan we lekker samen aan de slag met
          jouw merk. En dat moet vooral leuk zijn! Want plezier nemen we
          serieus. Vanuit daar ontstaat enthousiasme, trots en het
          zelfvertrouwen om jouw merk de uitstraling te geven die het verdient.
        </p>
        <button className="bg-black mt-7 text-white px-7 text-sm  py-3 rounded-xl">
          Contact
        </button>
      </div>
    </div>
  );
}

export default FifthPage;
