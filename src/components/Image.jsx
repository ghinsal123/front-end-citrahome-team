import React from "react";
import semenImg from '../assets/images/semen.png';

export default function Image() {
  return (
    <div className="relative w-48 h-64 rounded-xl overflow-hidden shadow-md group">
      <img
        src={semenImg}
        alt="Semen Tiga Roda"
        className="w-full h-full object-cover transition duration-300 ease-in-out filter brightness-75 group-hover:brightness-100"
      />
    </div>
  );
}
