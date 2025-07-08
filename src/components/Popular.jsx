import React from "react";

export default function Popular() {
  return (
    <div className="relative inline-block overflow-hidden rounded-2xl shadow-lg group">
      <img
        src="/assets/images/popular.jpg"
        alt="Popular"
        className="w-[300px] h-auto object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:opacity-0" />
    </div>
  );
}
