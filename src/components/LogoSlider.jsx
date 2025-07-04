import React, { useState, useEffect } from 'react';

// Import logo dari assets
import rucika from '../assets/images/rucika.png';
import philips from '../assets/images/philips.png';
import holcim from '../assets/images/holcim.png';
import makita from '../assets/images/makita.png';
import toto from '../assets/images/toto.png';
import dulux from '../assets/images/dulux.png';
import panasonic from '../assets/images/panasonic.png';
import alexindo from '../assets/images/alexindo.png';
import bosch from '../assets/images/bosch.png';

const brands = [
  { id: 1, src: rucika, alt: 'Rucika' },
  { id: 2, src: philips, alt: 'Philips' },
  { id: 3, src: holcim, alt: 'Holcim' },
  { id: 4, src: makita, alt: 'Makita' },
  { id: 5, src: toto, alt: 'Toto' },
  { id: 6, src: dulux, alt: 'Dulux' },
  { id: 7, src: panasonic, alt: 'Panasonic' },
  { id: 8, src: alexindo, alt: 'Alexindo' },
  { id: 9, src: bosch, alt: 'Bosch' },
];

export default function LogoSlider() {
  const [index, setIndex] = useState(0);
  const visible = 5;
  const total = brands.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Auto-slide tiap 3 detik
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Slice isi 5 item dimulai dari index
  const slice = [...Array(visible)].map((_, i) => brands[(index + i) % total]);

  return (
    <div className="w-full flex items-center justify-center gap-2">
      {/* Panah kiri */}
      <button
        onClick={prev}
        className="bg-white w-7 h-7 rounded-full shadow flex items-center justify-center -translate-x-1/2 z-10"
      >
        <span className="text-sm font-bold text-gray-800">{'‹'}</span>
      </button>

      {/* Kontainer Logo */}
      <div className="flex overflow-hidden gap-3">
        {slice.map((brand) => (
          <div
            key={brand.id}
            className="w-24 h-16 flex items-center justify-center border rounded-lg bg-white shadow-sm"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>

      {/* Panah kanan */}
      <button
        onClick={next}
        className="bg-white w-7 h-7 rounded-full shadow flex items-center justify-center translate-x-1/2 z-10"
      >
        <span className="text-sm font-bold text-gray-800">{'›'}</span>
      </button>
    </div>
  );
}
