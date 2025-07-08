import React, { useState, useEffect } from "react";

const brands = [
  { id: 1, src: "/assets/images/rucika.png", alt: "Rucika" },
  { id: 2, src: "/assets/images/philips.png", alt: "Philips" },
  { id: 3, src: "/assets/images/holcim.png", alt: "Holcim" },
  { id: 4, src: "/assets/images/makita.png", alt: "Makita" },
  { id: 5, src: "/assets/images/toto.png", alt: "Toto" },
  { id: 6, src: "/assets/images/dulux.png", alt: "Dulux" },
  { id: 7, src: "/assets/images/panasonic.png", alt: "Panasonic" },
  { id: 8, src: "/assets/images/alexindo.png", alt: "Alexindo" },
  { id: 9, src: "/assets/images/bosch.png", alt: "Bosch" },
];

export default function LogoSlider() {
  const [index, setIndex] = useState(0);
  const visible = 5;
  const total = brands.length;

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slice = [...Array(visible)].map((_, i) => brands[(index + i) % total]);

  return (
    <div className="flex w-full items-center justify-center gap-2">
      <button
        onClick={prev}
        className="z-10 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
      >
        <span className="text-sm font-bold text-gray-800">‹</span>
      </button>
      <div className="flex gap-3 overflow-hidden">
        {slice.map((brand) => (
          <div
            key={brand.id}
            className="flex h-16 w-24 items-center justify-center rounded-lg border bg-white shadow-sm"
          >
            <img
              src={brand.src}
              alt={brand.alt}
              className="max-h-12 object-contain"
            />
          </div>
        ))}
      </div>
      <button
        onClick={next}
        className="z-10 translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow"
      >
        <span className="text-sm font-bold text-gray-800">›</span>
      </button>
    </div>
  );
}
