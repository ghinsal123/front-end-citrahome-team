import React, { useState, useEffect } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

const testimonials = [
  {
    id: 1,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget.",
    image: "/assets/images/people4.jpeg",
  },
  {
    id: 2,
    name: "Ibu Nur",
    role: "Ibu Rumah Tangga",
    text: "Barang bagus dan cepat sampai.",
    image: "/assets/images/people3.png",
  },
  {
    id: 3,
    name: "Ibu Wati",
    role: "Ibu Rumah Tangga",
    text: "Cocok untuk rumah minimalis.",
    image: "/assets/images/people2.png",
  },
  {
    id: 4,
    name: "Ibu Sri",
    role: "Ibu Rumah Tangga",
    text: "Harga terjangkau dan kualitas oke.",
    image: "/assets/images/people1.png",
  },
  {
    id: 5,
    name: "Ibu Tini",
    role: "Ibu Rumah Tangga",
    text: "Saya puas dengan pelayanannya.",
    image: "/assets/images/people3.png",
  },
  {
    id: 6,
    name: "Ibu Jamilah",
    role: "Ibu Rumah Tangga",
    text: "Anak saya suka warnanya.",
    image: "/assets/images/people4.jpeg",
  },
];

const TestimonialSlider = () => {
  const [page, setPage] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleCards);
  const offset = page * visibleCards;
  const visibleTestimonials = testimonials.slice(offset, offset + visibleCards);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setPage((prev) => Math.min(prev + 1, totalPages - 1));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Judul */}
      <div className="text-center mb-8">
        <p className="text-sm text-orange-500 tracking-widest font-semibold">TESTIMONIALS</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Testimoni Pelanggan Kami</h2>
      </div>

      {/* Tombol Panah Kiri */}
      <button
        onClick={handlePrev}
        disabled={page === 0}
        className={`absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow ${
          page === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ArrowLeftIcon className="w-5 h-5 text-gray-800" />
      </button>

      {/* Tombol Panah Kanan */}
      <button
        onClick={handleNext}
        disabled={page >= totalPages - 1}
        className={`absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow ${
          page >= totalPages - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ArrowRightIcon className="w-5 h-5 text-gray-800" />
      </button>

      {/* Slider */}
      <div className="overflow-hidden">
        <div className="flex justify-center gap-4 transition duration-500 ease-in-out">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[calc(50%-0.5rem)] md:max-w-[calc(33.333%-0.5rem)] px-2 flex-shrink-0"
            >
              <div
                className="relative bg-cover bg-center rounded-xl shadow-md"
                style={{
                  backgroundImage: `url('/assets/images/testi.png')`,
                  height: "330px",
                }}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  <div className="bg-white rounded-xl w-full text-center pt-10 pb-4 px-3 relative min-h-[180px]">
                    <div className="absolute -top-7 left-1/2 transform -translate-x-1/2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-full border-4 border-white shadow"
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
