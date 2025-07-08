import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const images = [
  "/assets/images/bg1.png",
  "/assets/images/bg2.png",
  "/assets/images/referensi3.jpeg",
  "/assets/images/referensi4.jpeg",
  "/assets/images/referensi5.jpeg",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[65vh] w-135 overflow-hidden text-white flex items-center justify-center">
      <img
        src={images[currentIndex]}
        alt={`Hero ${currentIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700"
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-20" />
      <div className="relative z-30 text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-black">
          Citra Home Solusi Cerdas <br /> untuk Hunian Masa Kini
        </h2>
        <p className="text-xs md:text-sm mt-3">
          Ubah tampilan rumah Anda jadi lebih modern dan minimalis, <br />
          dengan mudah dan cepat bersama Citra Home.
        </p>
        <div className="mt-6 flex items-center justify-center">
          <div className="relative w-50 max-w-md">
            <input
              type="text"
              placeholder="Cari produk"
              className="w-full rounded-full py-2 pl-5 pr-10 text-white placeholder:text-white bg-white/20 backdrop-blur-md focus:outline-none border-2 border-white/60"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-[#773d20] hover:bg-[#5e2f17] p-2 rounded-full">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 z-40">
        <div className="group relative flex items-center">
          <div className="absolute left opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 bg-white text-green-600 text-xs font-semibold shadow-md px-3 py-1 transition duration-300 whitespace-nowrap rounded-md">
            <p>Hubungi Kami</p>
            <p>Sekarang!</p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-transparent border-l-green-600" />
          </div>
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition duration-300 group-hover:translate-x-21">
            <img src="/assets/images/logo-whatsapp.png" alt="WhatsApp" className="w-8 h-8" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-6 bg-[#4b2e1f]" : "w-2 bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
