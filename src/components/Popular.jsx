import React from 'react';
import popularImg from '../assets/images/popular.jpg'; // Pastikan path ini benar

export default function Popular({src, label = '#Popular2024' }) {
  return (
    <div className="group relative h-48 w-full overflow-hidden rounded-2xl shadow-md">
      {/* gambar */}
      <img
        src={popularImg}
        // alt={label}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent 
                      opacity-100 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none" />

      {/* teks */}
      <span className="absolute bottom-4 left-4 z-10 text-lg font-bold text-white drop-shadow">
        {/* {label} */}
      </span>
    </div>
  );
}
