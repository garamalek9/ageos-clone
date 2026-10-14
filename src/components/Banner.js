import React from 'react';

const Banner = () => {
  return (
    <div className="bg-purple-900 text-white p-6 rounded-xl shadow-xl flex flex-col md:flex-row items-center justify-between w-full md:w-3/4 mb-8">
      <div className="relative w-full md:w-1/2">
        <img 
          src="https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=794517413325282"  // URL réelle trouvée (ou remplace par ./assets/banner.jpg si local)
          alt="Open Geo AI Hack 4th Edition" 
          className="rounded-lg w-full"
        />
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-purple-900 rounded-full p-4 opacity-80 hover:opacity-100 transition">
          ▶️
        </button>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left flex-1">
        <h1 className="text-3xl font-bold">OPEN GEO AI HACK 4th EDITION</h1>
        <h2 className="text-2xl">&lt;CHALLENGES OPENGEODATA & GEOAI&gt;</h2>
        <p className="mt-2">11 & 12 NOVEMBER 2023</p>
        <p>Novation City Sousse</p>
        <p className="font-bold">30H NON STOP ...</p>
      </div>
      <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded mt-4 md:mt-0">
        🟡 Devenir Membre
      </button>
    </div>
  );
};

export default Banner;