import React, { useState } from "react";
import {ChevronLeftIcon , ChevronRightIcon } from "@heroicons/react/24/solid";

const testimonials = [
  { id: 1, name: "Ibu Sukijan", role: "Ibu Rumah Tangga", text: "Keramik dan catnya bagus banget." },
  { id: 2, name: "Ibu Nur", role: "Ibu Rumah Tangga", text: "Barang bagus dan cepat sampai." },
  { id: 3, name: "Ibu Wati", role: "Ibu Rumah Tangga", text: "Cocok untuk rumah minimalis." },
  { id: 4, name: "Ibu Sri", role: "Ibu Rumah Tangga", text: "Harga terjangkau dan kualitas oke." },
  { id: 5, name: "Ibu Tini", role: "Ibu Rumah Tangga", text: "Saya puas dengan pelayanannya." },
  { id: 6, name: "Ibu Jamilah", role: "Ibu Rumah Tangga", text: "Anak saya suka warnanya." },
];

const TestimonialSlider = () => {
  const [page, setPage] = useState(0);
  const visibleCards = 3;
  const totalPages = Math.ceil(testimonials.length / visibleCards);

  const handlePrev = () => {
    setPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const offset = page * visibleCards;
  const visibleTestimonials = testimonials.slice(offset, offset + visibleCards);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Judul */}
      <div className="text-center mb-8">
        <p className="text-sm text-orange-500 tracking-widest font-semibold">TESTIMONIALS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Testimoni Pelanggan Kami</h2>
      </div>

     {/* Tombol kiri */}
<button
  onClick={handlePrev}
  disabled={page === 0}
  className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow ${
    page === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
  }`}
>
  <ChevronLeftIcon  className="w-4 h-4 text-black" />
</button>

{/* Tombol kanan */}
<button
  onClick={handleNext}
  disabled={page >= totalPages - 1}
  className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow ${
    page >= totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
  }`}
>
  <ChevronRightIcon className="w-4 h-4 text-black" />
</button>


      {/* Slider */}
      <div className="overflow-hidden">
        <div className="flex justify-center gap-4 transition duration-500 ease-in-out">
          {visibleTestimonials.map((item) => (
            <div key={item.id} className="w-65 px-2 flex-shrink-0">
              <div
                className="relative bg-cover bg-center rounded-xl shadow-md"
                style={{
                  backgroundImage: `url('/assets/images/referensi.jpeg')`,
                  height: "330px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  <div className="bg-white rounded-xl w-full text-center pt-10 pb-4 px-3 relative">
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                      <img
                        src="/assets/images/people4.jpeg"
                        alt={item.name}
                        className="w-15 h-15 rounded-full border-4 border-white shadow"
                      />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.role}</p>
                    <p className="text-sm text-gray-600 mt-2 leading-snug">"{item.text}"</p>
                    <div className="mt-2 text-orange-400 text-xs">★ ★ ★ ★ ☆</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
