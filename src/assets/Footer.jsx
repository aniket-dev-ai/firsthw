import React from "react";

import log from 'D:/Tasks/React/firsthw/src/Images/footerimg.png';

function Footer() {
  return (
    <div className="bg-black">
    <div className="bg-black text-white py-10 px-6">
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center">
  
        <div className="mb-6 pl-7 md:mb-8  ">
          <h2 className="text-5xl font-semibold mb-4">Let's turn some heads!</h2>
          <button className="flex rounded-2xl items-center justify-center border border-white px-6 py-3 text-white hover:bg-white hover:text-black transition">
            Contact
            <span className="ml-2">&rarr;</span>
          </button>
        </div>
 
        <div className="flex flex-col md:flex-row gap-10 text-sm">
      
          <div>
            <h3 className="font-semibold mb-2 text-lg">Socials</h3>
            <ul className="space-y-1 text-xs">
              <li>INSTAGRAM</li>
              <li>LINKEDIN</li>
            </ul>
          </div>
 
          <div>
            <h3 className="font-semibold mb-2 text-lg">Sitemap</h3>
            <ul className="space-y-1 text-xs">
              <li>HOME</li>
              <li>PROJECTEN</li>
              <li>OVER</li>
              <li>CONTACT</li>
            </ul>
          </div>
 
          <div>
            <h3 className="font-semibold mb-2 text-lg">Info</h3>
            <ul className="space-y-1 text-xs">
              <li>ALGEMENE VOORWAARDEN</li>
              <li>PRIVACYBELEID</li>
              <li>COOKIEBELEID</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      <img src={log}></img>
    </div>
  );
}

export default Footer;
