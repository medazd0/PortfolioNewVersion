// src/components/Loader.jsx
import React from "react";
import "./Loader.css"; // on va y mettre les animations

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      {/* Pacman */}
      <div className="pacman mb-8">
        <div className="pacman-top"></div>
        <div className="pacman-bottom"></div>
      </div>

      {/* Les points */}
      <div className="dots flex space-x-4">
        <div className="dot delay-0"></div>
        <div className="dot delay-200"></div>
        <div className="dot delay-400"></div>
      </div>

      {/* Texte en bas */}
      <div className="mt-8 text-center">
        <p className="text-green-500 font-orbitron text-lg">
          React <span className="text-white">Portfolio</span>
        </p>
        <p className="text-gray-400 text-sm">by Mohamed Azoud</p>
      </div>
    </div>
  );
}

export default Loader;
