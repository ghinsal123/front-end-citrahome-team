import React from 'react';
import popularImg from '../assets/images/popular.jpg';

export default function Popular() {
  return (
    <div className="relative inline-block overflow-hidden rounded-2xl shadow-lg group">
      <img
        src={popularImg}
        alt="Popular"
        className="w-[300px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
    </div>
  );
}
