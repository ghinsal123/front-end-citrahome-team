import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const TestimonialCard = () => {
  return (
    <div className="relative w-72 max-w-xs rounded-2xl overflow-hidden shadow-lg">
      <img
        src="/assets/images/referensi.jpeg"
        alt="Background"
        className="w-full h-93 object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/40 to-transparent p-4">
        <div className="bg-white rounded-xl p-4 text-center shadow-md">
          <div className="flex justify-center">
            <img
              src="/assets/images/people4.jpeg"
              alt="Avatar"
              className="w-15 h-15 rounded-full border-4 border-white -mt-10"
            />
          </div>
          <h3 className="text-sm font-bold text-gray-800 mt-2">Ibu Sukijan</h3>
          <p className="text-xs text-gray-500">Ibu Rumah Tangga</p>
          <p className="text-sm text-gray-600 mt-2">
            “Keramik dan catnya bagus banget, cocok untuk rumah modern.”
          </p>
          <div className="flex justify-center mt-3 text-orange-400 text-xs">
            <span>★ ★ ★ ★ ☆</span>
          </div>
        </div>
        <button className="mt-4 bg-[#E86F2C] hover:bg-[#c75b1d] text-white px-4 py-2 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold w-full transition">
          Lihat Hasil
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
