import React from "react";

export default function ProductCard () {
    return(
        <div className="w-full max-w-xs bg-white p-4 rounded-2xl shadow-md space-y-3">
             <img
        src="/assets/semen.jpg"
        alt="Semen Tiga Roda"
        className="rounded-xl object-cover h-40 w-full"
      />

      <div>
        <h3 className="font-semibold text-brown-800 text-base">Semen Tiga Roda</h3>
        <p className="text-red-500 font-bold text-sm">Rp. 50.000</p>
      </div>

      <div className="flex gap-2">
        <a
          href="#"
          className="bg-[#FA4D09] hover:bg-[#d03e06]  text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1"
        >
          <img src="../assets/img/Shopee.png" alt="Shopee" className="w-4 h-4" />
          shopee
        </a>
        <a
          href="#"
          className="bg-[#03AC0E]  hover:bg-[#028c0c] text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1"
        >
          <img src="/assets/.png" alt="Tokopedia" className="w-4 h-4" />
          tokopedia
        </a>
      </div>
        </div>
    );
}