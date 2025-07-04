import React, { useState, useEffect } from 'react';
import slide1 from '../assets/images/promo1.png'; // Gambar kursi bulat transparan
// import slide2 from '../assets/images/promo2.png'; // Tambahkan jika mau auto-slide lebih dari 1
// ... tambahkan slide lain jika dibutuhkan

const slides = [
  {
    id: 1,
    title: 'Promo Special Citra Home',
    discount: 'Diskon 10%',
    cicilan: 'Cicilan 0%',
    periode: 'Periode hingga tanggal 31 desember 2025',
    image: slide1,
  },
  // { id: 2, ... } ← jika mau auto-slide
];

export default function PromoSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const currentSlide = slides[current];

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-lg bg-cover bg-center" style={{ backgroundImage: 'url(/img/background.jpg)' }}>
      <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-black/50 text-white gap-6 md:gap-12">
        {/* Text */}
        <div className="max-w-md space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-bold">{currentSlide.title}</h2>
          <p className="text-xl font-semibold">{currentSlide.discount}</p>
          <p className="text-xl font-semibold">+</p>
          <p className="text-xl font-semibold">{currentSlide.cicilan}</p>
          <div className="inline-block bg-[#eb5d3e] text-white px-3 py-1 text-xs rounded font-semibold mt-2">
            {currentSlide.periode}
          </div>
        </div>

        {/* Gambar */}
        <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-white flex items-center justify-center">
          <img src={currentSlide.image} alt="promo" className="object-contain w-[90%] h-[90%]" />
          <div className="absolute -top-4 -right-4 bg-[#eb5d3e] w-16 h-16 rounded-t-full z-[-1]"></div>
        </div>
      </div>

      {/* Panah kiri */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 text-white bg-white/30 hover:bg-white/60 rounded-full w-8 h-8 flex items-center justify-center">
        ‹
      </button>

      {/* Panah kanan */}
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 text-white bg-white/30 hover:bg-white/60 rounded-full w-8 h-8 flex items-center justify-center">
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
