import React, { useState } from 'react';

import slide1 from '../assets/images/slide1.png';
import slide2 from '../assets/images/slide2.png';
import slide3 from '../assets/images/slide3.png';

const images = [
  { id: 1, src: slide1, alt: 'Slide 1' },
  { id: 2, src: slide2, alt: 'Slide 2' },
  { id: 3, src: slide3, alt: 'Slide 3' },
];

export default function Caraosel() {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((p) => (p + 1) % images.length);
  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Gambar + navigasi */}
      <div className="relative">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-[250px] md:h-[340px] object-cover rounded-[16px]"
        />

        {/* Panah kiri */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2
                     bg-white w-8 h-8 rounded-full shadow flex items-center justify-center"
        >
          <span className="leading-none text-sm font-bold text-black">‹</span>
        </button>

        {/* Panah kanan */}
        <button
          onClick={next}
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2
                     bg-white w-8 h-8 rounded-full shadow flex items-center justify-center"
        >
          <span className="leading-none text-sm font-bold text-black">›</span>
        </button>
      </div>

      {/* ▶︎ Dot indikator di luar gambar, kiri bawah */}
      <div className="mt-3 flex justify-start pl-4 gap-2">
        {images.map((_, i) => (
          <span
            key={i}
            className={`rounded-full transition-all duration-300
                        ${i === current ? 'w-6 h-2.5 bg-[#5c2b14]' : 'w-2.5 h-2.5 bg-[#e0e0e0]'}`}
          />
        ))}
      </div>

      {/* Tombol lihat semua contoh, kanan bawah */}
      <div className="text-right pr-4 mt-2">
        <button className="text-sm text-[#5c2b14] hover:underline">
          Lihat semua contoh
        </button>
      </div>
    </div>
  );
}
