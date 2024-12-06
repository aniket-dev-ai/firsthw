import React from "react";

function SeventhPage() {
  const companies = [
    ["BEWAKINGSDIENST VAN MOOK", "OZO VERBINDZORG", "TWOFIFTYK"],
    ["VAN DER HEIJDEN BOUW", "SIGNAL STREAM", "ADEKWAAD"],
    ["SPEYZ", "GAAF CREATIES", "ZOET MOMENT"],
    ["ZETH", "LUNENBURG EVENTS", "FOREX LIBRARY"],
  ];

  return (
    <div className="  bg-[#F4F4F1]">
      <div className="bg-[#F4F4F1]  py-8 px-16">
        <h2 className="text-2xl font-semibold mb-4">Did some cool stuff for</h2>
        <hr className="border-t border-black mb-6" />
        <div className="grid grid-cols-3 gap-y-3 text-gray-400 text-xl font-medium">
          {companies.map((row, rowIndex) =>
            row.map((company, index) => (
              <div key={`${rowIndex}-${index}`} className="text-left">
                {company}
              </div>
            ))
          )}
        </div>
      </div>
      <div className="rounded-full    w-[99vw]">
        <img
          className=" relative rotate ml-[85vw] h-40"
          src="https://cdn.prod.website-files.com/6454cbf2dcc426c6ec47ef06/64bbbf416decd23360ebb88c_get-in-touch-badge.svg"
        ></img>
      </div>
    </div>
  );
}

export default SeventhPage;
