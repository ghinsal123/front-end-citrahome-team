import React from 'react';
import heroImg from '../assets/images/hero.jpg';

export default function HeroImage() {
  return (
    <div className="relative inline-block overflow-hidden rounded-2xl shadow-lg group">
      <img
        src={heroImg}
        alt="Hero"
        className="w-[400px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0 pointer-events-none" />
    </div>
  );
}
