import React from "react";

const RenovasiTamanCard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-12 bg-white rounded-xl">
      
      {/* Kiri: Teks */}
      <div className="lg:w-1/2 mb-6 lg:mb-0">
        <p className="text-sm text-orange-400 font-semibold mb-2 uppercase tracking-wide">
          Tips & Tricks
        </p>
        <h2 className="text-3xl font-bold text-gray-800 leading-snug mb-4">
          Renovasi Taman Depan Rumah
        </h2>
        <p className="text-gray-600 text-base mb-6">
          Dapatkan ide membuat taman tropis yang asri dan hemat biaya untuk mempercantik halaman rumah Anda. Pelajari kesalahan.
        </p>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          Pelajari Lebih Lanjut
        </button>
      </div>

        <div className="relative w-[320px] h-[210px]">
            {/* Card belakang (warna hijau kebiruan) */}
            <div className="absolute bottom-5 right-3 w-50 h-full bg-[#4F8686] rounded-xl z-0" />

            {/* Card depan (gambar mozaik) */}
            <div className="relative">
                <img
                src="assets/images/renovasi.png"
                alt="Mozaik"
                className="object-cover w-full h-full"
                />
            </div>
        </div>
    </div>
  );
};

export default RenovasiTamanCard;
