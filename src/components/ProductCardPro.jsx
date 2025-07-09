import React from "react";

const products = [
  {
    name: "DBS GRANITE 60X120 WOODEN OSCAR G KW1 BOX/1.44M2",
    price: "200.000",
    unit: "/sqm",
    image: "/assets/images/metro.png",
  },
  {
    name: "DBS GRANITE 60X120 WOODEN OSCAR G KW1 BOX/1.44M2",
    price: "200.000",
    unit: "/sqm",
    image: "/assets/images/wooden.png",
  },
  {
    name: "DBS GRANITE 60X120 WOODEN OSCAR G KW1 BOX/1.44M2",
    price: "200.000",
    unit: "/unit",
    image: "/assets/images/wooden3.png",
  },
  {
    name: "DBS GRANITE 60X120 WOODEN OSCAR G KW1 BOX/1.44M2",
    price: "200.000",
    unit: "/unit",
    image: "/assets/images/wooden4.png",
  },
  {
    name: "DBS GRANITE 60X120 WOODEN OSCAR G KW1 BOX/1.44M2",
    price: "200.000",
    unit: "/unit",
    image: "/assets/images/wooden2.png",
  },
];

const ProductCardPro = ({ product }) => {
  return (
    <div className="min-w-[180px] sm:min-w-0 w-44 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md flex-shrink-0">
      <div className="p-3">
        <div className="group relative overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-36 w-full object-cover rounded-lg transition duration-300 filter brightness-75 group-hover:brightness-100"
          />
        </div>
      </div>
      <div className="space-y-1 px-3 pb-3">
        <h2 className="text-[10px] font-bold text-gray-800 leading-snug line-clamp-2">
          {product.name}
        </h2>
        <p className="text-[10px] text-gray-500">Rp</p>
        <p className="text-lg font-bold leading-none text-red-500">
          {product.price}
          <span className="text-xs font-medium text-gray-500">
            {product.unit}
          </span>
        </p>
        <p className="mt-1 text-[10px] text-gray-500">Beli di</p>
        <div className="mt-1 flex gap-1">
          <a
            href="#"
            className="group flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-0.5 shadow-sm hover:bg-[#FA4D09]"
          >
            <img
              src="/assets/images/shopee2.png"
              alt="Shopee"
              className="h-4 group-hover:hidden"
            />
            <img
              src="/assets/images/shopeehover.png"
              alt="Shopee Hover"
              className="h-4 hidden group-hover:block"
            />
          </a>
          <a
            href="#"
            className="group flex items-center justify-center rounded-md border border-gray-300 bg-white px-2 py-0.5 shadow-sm hover:bg-[#03AC0E]"
          >
            <img
              src="/assets/images/tokopedia2.png"
              alt="Tokopedia"
              className="h-3 group-hover:hidden"
            />
            <img
              src="/assets/images/tokopediahover.png"
              alt="Tokopedia Hover"
              className="h-3 hidden group-hover:block"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function ProductList() {
  return (
    <div className="max-w-5xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-8">
      <h2 className="text-xl font-bold text-[#522202] mb-4">
        Rekomendasi Produk
      </h2>

      {/* Container scroll horizontal di mobile */}
      <div className="overflow-x-auto sm:overflow-visible">
        <div className="flex sm:grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product, index) => (
            <ProductCardPro key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
