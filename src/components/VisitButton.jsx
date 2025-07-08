import React from "react";
import { MapIcon } from "@heroicons/react/24/outline"; 

export default function VisitButton() {
  return (
    <button
      className="group flex items-center justify-between gap-2 font-bold text-sm px-4 py-2 rounded-full text-[#F17157] bg-white hover:bg-[#FF5959] hover:text-white transition-all duration-300"
    >
      Kunjungi Toko Kami Di Sini
      <span
        className="w-7 h-7 flex items-center justify-center rounded-full bg-[#F17157] text-white group-hover:bg-white group-hover:text-[#FF5959] transition-all duration-300"
      >
        <MapIcon className="w-5 h-5" />
      </span>
    </button>
  );
}
