import React from "react";

export default function ShopeeButton() {
  return (
    <div className="flex gap-2">
      <a
        href="#"
        className="bg-[#F17157] hover:bg-[#EE4D2D] text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1 transition"
      >
        <img src="/assets/images/shopee.png" alt="Shopee" className="w-4 h-4" />
        Shopee
      </a>
    </div>
  );
}
