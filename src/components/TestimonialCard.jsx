import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import profileImg from '../assets/images/profile.jpeg';
import hero2Img from "../assets/images/hero2.jpeg";

const TestimonialCard = () => {
  return (
    <div className="relative w-60 max-w-xs rounded-2xl overflow-hidden shadow-lg">
      {/* Background image */}
      <img
        src={hero2Img}
        alt="Background"
        className="w-full h-70 object-cover"
      />

      {/* Testimonial Card Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent p-4">
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          {/* Avatar */}
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Avatar"
              className="w-12 h-12 rounded-full border-2 border-white -mt-10"
            />
          </div>

          {/* Name and Role */}
          <h3 className="text-sm font-bold text-gray-800 mt-2">Ibu Sukijan</h3>
          <p className="text-xs text-gray-500">Ibu Rumah Tangga</p>

          {/* Quote */}
          <p className="text-sm text-gray-600 mt-2">
            “Keramik dan catnya bagus banget, cocok untuk rumah modern.”
          </p>

          {/* Stars */}
          <div className="flex justify-center mt-3 text-orange-400 text-xs">
            <span>★ ★ ★ ★ ☆</span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-4 bg-[#E86F2C] hover:bg-[#c75b1d] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold w-full transition">
          Lihat Hasil
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
