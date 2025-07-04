import React from "react";
import semenImg from '../assets/images/semen.png';

export default function ImageHoverDarken() {
  return (
    <div className="relative w-48 h-64 rounded-xl overflow-hidden shadow-md group">
      <img
        src={semenImg} alt="Semen Tiga Roda" 
        className="w-full h-full object-cover transition duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-25 transition duration-300"></div>
    </div>
  );
}
