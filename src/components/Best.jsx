import React from 'react';
import bestImg from "../assets/images/best.jpg";


export default function Best(src) {
  return (
    <div className="relative inline-block overflow-hidden rounded-2xl shadow-lg group">
      <img
        src={bestImg}
        alt="Best"
        className="w-[300px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
    </div>
  );
}
