import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import hero2Img from "../assets/images/hero2.jpeg";
import waimg from "../assets/images/logo-whatsapp.png";


export default function Hero() {
  return (
    <section className="relative h-[90vh] w-150 overflow-hidden text-white flex items-center justify-center">
      <img
        src={hero2Img}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Konten utama */}
      <div className="relative z-20 text-center max-w-2xl px-4">
      <h1 className="text-xl md:text-3xl font-semibold leading-snug">
        Citra Home Solusi Cerdas <br /> untuk Hunian Masa Kini
      </h1>
      <p className="text-xs md:text-sm mt-3">
        Ubah tampilan rumah Anda jadi lebih modern dan minimalis, <br />
        dengan mudah dan cepat bersama Citra Home.
      </p>       
      
       {/* Search bar */}
        <div className="mt-6 flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Cari produk"
              className="w-full rounded-full py-2 pl-5 pr-10 text-white placeholder:text-white bg-white/20 backdrop-blur-md focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-[#773d20] hover:bg-[#5e2f17] p-2 rounded-full">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

{/* WhatsApp Button with Hover Text */}
<div className="absolute bottom-5 left-5 z-30">
  <div className="group relative flex items-center">

    {/* Teks muncul di kiri saat hover */}
    <div className="absolute right--8 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 bg-white text-green-600 text-xs font-semibold shadow-md px-3 py-1 transition duration-300 whitespace-nowrap">
      <p>Hubungi Kami</p>
      <p>Sekarang!</p> 

    {/* Segitiga hijau di pojok kiri bawah */}
    <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-transparent border-l-green-600"></div>
    </div>

    {/* Icon WA bergerak sedikit ke kanan saat hover */}
    <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md transition duration-300 group-hover:translate-x-21">
      <img src={waimg} alt="WhatsApp" className="w-8 h-8" />
    </div>
  </div>
</div>


    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex gap-1">
        <span className="w-2 h-2 rounded-full bg-white"></span>
        <span className="w-2 h-2 rounded-full bg-white/50"></span>
        <span className="w-2 h-2 rounded-full bg-white/50"></span>
      </div>
    </section>
  );
}
