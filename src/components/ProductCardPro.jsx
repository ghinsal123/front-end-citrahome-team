import React from "react";
import shopee2 from "../assets/images/shopee2.png";
import shopeeHover from "../assets/images/shopeehover.png";
import tokopedia2 from "../assets/images/tokopedia2.png";
import tokopediaHover from "../assets/images/tokopediahover.png";
import metro from "../assets/images/metro.png";

const ProductCardPro = () => {
  return (
    <div className="w-60 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      
      {/* Gambar produk dengan hover gelap */}
      <div className="p-4">
        <div className="relative group rounded-xl overflow-hidden">
          <img
            src={metro}
            alt="Metro Pink"
            className="rounded-xl w-full h-52 object-cover transition duration-300"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 rounded-xl"></div>
        </div>
      </div>

      {/* Konten produk */}
      <div className="px-4 pb-4 space-y-1">
        <p className="text-sm text-gray-500">Keramik</p>
        <h2 className="text-xl font-bold text-gray-800">Metro Pink</h2>

        <p className="text-sm text-gray-500">Rp</p>
        <p className="text-2xl text-red-500 font-bold leading-none">
          200.000
          <span className="text-sm font-medium text-gray-500">/sqm</span>
        </p>

        <p className="text-sm text-gray-500 mt-2">Beli di</p>
        <div className="flex gap-2 mt-1">
          
          {/* Shopee */}
          <a
            href="#"
            className="group border border-gray-300 rounded-md px-3 py-1 shadow-sm 
                       transition-all duration-200 ease-in-out flex items-center justify-center 
                       bg-white hover:bg-[#FA4D09]"
          >
            <img
              src={shopee2}
              alt="Shopee"
              className="h-6 w-auto group-hover:hidden"
            />
            <img
              src={shopeeHover}
              alt="Shopee Hover"
              className="h-6 w-auto hidden group-hover:block"
            />
          </a>

          {/* Tokopedia */}
          <a
            href="#"
            className="group border border-gray-300 rounded-md px-3 py-1 shadow-sm 
                       transition-all duration-200 ease-in-out flex items-center justify-center 
                       bg-white hover:bg-[#03AC0E]"
          >
            <img
              src={tokopedia2}
              alt="Tokopedia"
              className="h-4 w-auto group-hover:hidden"
            />
            <img
              src={tokopediaHover}
              alt="Tokopedia Hover"
              className="h-4 w-auto hidden group-hover:block"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCardPro;
