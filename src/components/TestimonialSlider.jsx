import React, { useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import profileImg from "../assets/images/profile.jpeg";
import hero2Img from "../assets/images/hero2.jpeg";

const testimonials = [
  {
    id: 1,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget, cocok untuk rumah modern.",
    image: "/assets/profile.jpg",
    bg: "/assets/room1.jpg",
  },
  {
    id: 2,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget, cocok untuk rumah modern.",
    image: "/assets/profile.jpg",
    bg: "/assets/room2.jpg",
  },
  {
    id: 3,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget, cocok untuk rumah modern.",
    image: "/assets/profile.jpg",
    bg: "/assets/room3.jpg",
  },
  {
    id: 4,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget, cocok untuk rumah modern.",
    image: "/assets/profile.jpg",
    bg: "/assets/room1.jpg",
  },
  {
    id: 5,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget, cocok untuk rumah modern.",
    image: "/assets/profile.jpg",
    bg: "/assets/room2.jpg",
  },
  {
    id: 6,
    name: "Ibu Sukijan",
    role: "Ibu Rumah Tangga",
    text: "Keramik dan catnya bagus banget, cocok untuk rumah modern.",
    image: "/assets/profile.jpg",
    bg: "/assets/room3.jpg",
  },
];

const TestimonialSlider = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;
  const maxIndex = testimonials.length - visibleCards;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow ${
          startIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ArrowLeftIcon className="w-5 h-5 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        disabled={startIndex >= maxIndex}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow ${
          startIndex >= maxIndex ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
        }`}
      >
        <ArrowRightIcon className="w-5 h-5 text-gray-800" />
      </button>

      {/* Slider Cards */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${startIndex * 100 / visibleCards}%)`,
            width: `${(testimonials.length / visibleCards) * 100}%`,
          }}
        >
          {testimonials.map((item) => (
            <div key={item.id} className="w-60 px-2 flex-shrink-0">
              <div className="relative rounded-xl overflow-hidden shadow-md">
                <img
                  src={hero2Img}
                  alt="Background"
                  className="w-full h-60 object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent p-4">
                  <div className="bg-white rounded-xl p-3 text-center shadow">
                    <div className="flex justify-center">
                      <img
                        src={profileImg}
                        alt="Avatar"
                        className="w-10 h-10 rounded-full border-2 border-white -mt-8"
                      />
                    </div>
                    <h3 className="text-xs font-semibold text-gray-800 mt-1">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-gray-500">{item.role}</p>
                    <p className="text-xs text-gray-600 mt-1 leading-snug">
                      "{item.text}"
                    </p>
                    <div className="flex justify-center mt-2 text-orange-400 text-xs">
                      ★ ★ ★ ★ ☆
                    </div>
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
