import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {
  return (
    <div className="mt-8 mb-8 flex justify-center items-center px-4">
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <input
          type="text"
          placeholder="Temukan produk pilihan di Citra Home ..."
          className="w-full rounded-full py-3 pl-5 pr-12 text-sm sm:text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#773d20]"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-[#522202] hover:brightness-90 w-8 h-8 flex items-center justify-center rounded-full shadow transition duration-200">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
