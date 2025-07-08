import React from "react";

export default function ProductCard() {
  return (
    <div className="w-60 space-y-3 rounded-2xl bg-white p-4 shadow-md">
      <div className="group relative overflow-hidden rounded-xl shadow-md">
        <img
          src="/assets/images/semen.png"
          alt="Semen Tiga Roda"
          className="h-68 w-53 rounded-xl object-cover transition duration-300 filter brightness-75 group-hover:brightness-100"
        />
      </div>
      <div>
        <h3 className="text-base font-semibold text-brown-800">Semen Tiga Roda</h3>
        <p className="text-sm font-bold text-red-500">Rp. 50.000</p>
      </div>
      <div className="flex gap-2">
        <a
          href="#"
          className="flex items-center gap-1 rounded-md bg-primary px-3 py-1 text-sm font-semibold text-white hover:bg-[#EE4D2D]"
        >
          <img src="/assets/images/shopee.png" alt="Shopee" className="h-4 w-4" />
          shopee
        </a>
        <a
          href="#"
          className="flex items-center gap-1 rounded-md bg-[#33BB7C] px-3 py-1 text-sm font-semibold text-white hover:bg-[#00AA5B]"
        >
          <img src="/assets/images/tokopedia.png" alt="Tokopedia" className="h-4 w-4" />
          tokopedia
        </a>
      </div>
    </div>
  );
}
