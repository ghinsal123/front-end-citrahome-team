import React from 'react';
import productImg from '../assets/images/produk.png'; // Ganti sesuai gambar kamu

const products = Array(8).fill({
  name: 'Propan Trafikkote Tfk-108WB White* 2.5kg',
  price: 'Rp 100.00',
  discount: 'Rp 244.650',
  tag: '55%',
  img: productImg,
});

export default function ProductSlider() {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-2 py-4 w-max">
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[160px] bg-white rounded-2xl shadow-md p-3 flex-shrink-0"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-28 object-contain mb-3"
            />
            <div className="text-sm font-medium leading-tight line-clamp-2">
              {product.name}
            </div>
            <div className="text-xs text-gray-400 line-through">{product.discount}</div>
            <div className="text-xs inline-block bg-[#ff6a3e] text-white px-1.5 py-0.5 rounded mt-1 text-[10px]">
              {product.tag}
            </div>
            <div className="text-[15px] font-semibold text-[#222] mt-1">{product.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
