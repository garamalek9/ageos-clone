import React from 'react';

const Highlights = () => {
  return (
    <section className="py-12 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Highlights AGEOS 2021</h2>
      <div className="flex justify-center">
        <div className="relative">
          <img 
            src="https://headless-api.ageas.com/sites/default/files/styles/full/public/2022-03/onepager.jpg?itok=rD9H-QsP"  // Thumbnail trouvée (remplace par ta vidéo thumbnail si local)
            alt="Highlights AGEOS 2021" 
            className="rounded-lg shadow-md w-full max-w-4xl"
          />
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-900 rounded-full p-4 opacity-80 hover:opacity-100 transition">
            ▶️ Regarder la Vidéo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;