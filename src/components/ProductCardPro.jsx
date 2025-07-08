import React from "react";

const ProductCardPro = () => {
  return (
    <div className="w-60 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
      <div className="p-4">
        <div className="group relative overflow-hidden rounded-xl">
          <img
            src="/assets/images/metro.png"
            alt="Metro Pink"
            className="h-52 w-full rounded-xl object-cover transition duration-300 filter brightness-75 group-hover:brightness-100"
          />
        </div>
      </div>
      <div className="space-y-1 px-4 pb-4">
        <p className="text-sm text-gray-500">Keramik</p>
        <h2 className="text-xl font-bold text-gray-800">Metro Pink</h2>
        <p className="text-sm text-gray-500">Rp</p>
        <p className="text-2xl font-bold leading-none text-red-500">
          200.000
          <span className="text-sm font-medium text-gray-500">/sqm</span>
        </p>
        <p className="mt-2 text-sm text-gray-500">Beli di</p>
        <div className="mt-1 flex gap-2">
          <a
            href="#"
            className="group flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1 shadow-sm transition-all duration-200 hover:bg-[#FA4D09]"
          >
            <img
              src="/assets/images/shopee2.png"
              alt="Shopee"
              className="h-6 w-auto group-hover:hidden"
            />
            <img
              src="/assets/images/shopeehover.png"
              alt="Shopee Hover"
              className="h-6 w-auto hidden group-hover:block"
            />
          </a>
          <a
            href="#"
            className="group flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-1 shadow-sm transition-all duration-200 hover:bg-[#03AC0E]"
          >
            <img
              src="/assets/images/tokopedia2.png"
              alt="Tokopedia"
              className="h-4 w-auto group-hover:hidden"
            />
            <img
              src="/assets/images/tokopediahover.png"
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
