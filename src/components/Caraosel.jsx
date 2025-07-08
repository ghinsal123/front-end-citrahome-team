import React, { useState } from 'react';

const images = [
  { id: 1, src: '/assets/images/slide1.png', alt: 'Slide 1' },
  { id: 2, src: '/assets/images/slide2.png', alt: 'Slide 2' },
  { id: 3, src: '/assets/images/slide3.png', alt: 'Slide 3' },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-[250px] md:h-[340px] object-cover rounded-[16px]"
        />
        <button
          type="button"
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center"
        >
          <span className="text-sm font-bold text-black">‹</span>
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow flex items-center justify-center"
        >
          <span className="text-sm font-bold text-black">›</span>
        </button>
      </div>
      <div className="mt-3 flex justify-start pl-4 gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`rounded-full transition-all duration-300 ${
              index === current
                ? 'w-6 h-2.5 bg-[#5c2b14]'
                : 'w-2.5 h-2.5 bg-[#e0e0e0]'
            }`}
          />
        ))}
      </div>
      <div className="text-right pr-4 mt-2">
        <button type="button" className="text-sm text-[#5c2b14] hover:underline">
          Lihat semua contoh
        </button>
      </div>
    </div>
  );
}
