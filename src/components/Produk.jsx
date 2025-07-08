import React from "react";

const products = Array(8).fill({
  name: "Propan Trafikkote Tfk-108WB White* 2.5kg",
  price: "Rp 100.00",
  discount: "Rp 244.650",
  tag: "55%",
  img: "/assets/images/produk.png",
});

export default function ProductSlider() {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex w-max gap-4 px-2 py-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[160px] flex-shrink-0 rounded-2xl bg-white p-3 shadow-md"
          >
            <img
              src={product.img}
              alt={product.name}
              className="mb-3 h-28 w-full object-contain"
            />
            <div className="line-clamp-2 text-sm font-medium leading-tight">
              {product.name}
            </div>
            <div className="text-xs text-gray-400 line-through">{product.discount}</div>
            <div className="mt-1 inline-block rounded bg-[#ff6a3e] px-1.5 py-0.5 text-[10px] text-white">
              {product.tag}
            </div>
            <div className="mt-1 text-[15px] font-semibold text-[#222]">
              {product.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
