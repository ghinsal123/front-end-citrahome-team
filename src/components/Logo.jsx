import React from "react";

const brands = [
  { name: "Rucika", src: "/assets/images/rucika.png" },
  { name: "Philips", src: "/assets/images/philips.png" },
  { name: "Holcim", src: "/assets/images/holcim.png" },
  { name: "Makita", src: "/assets/images/makita.png" },
  { name: "Panasonic", src: "/assets/images/panasonic.png" },
  { name: "Dulux", src: "/assets/images/dulux.png" },
  { name: "Nippon", src: "/assets/images/nippon.png" },
];

export default function BrandLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 bg-white p-6">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="group flex h-16 w-28 items-center justify-center"
          title={brand.name}
        >
          <img
            src={brand.src}
            alt={`${brand.name} logo`}
            className="h-full w-full object-contain grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-105 transform"
          />
        </div>
      ))}
    </div>
  );
}
