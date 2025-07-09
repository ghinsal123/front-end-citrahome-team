import React, { useState, useEffect } from "react";
import {
  DevicePhoneMobileIcon,
  FunnelIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const slides = [
  {
    id: 1,
    variant: "discount",
    title: "Promo Special Citra Home",
    discountText: "Diskon 10%",
    installment: "Cicilan 0%",
    period: "Periode hingga tanggal 31 Desember 2025",
    bg: "/assets/images/bg1.png",
    images: ["/assets/images/kursi1.png", "/assets/images/kursi2.png"],
  },
  {
    id: 2,
    variant: "discountOnly",
    discountText: "Diskon",
    discountPercent: "5%",
    period: "Periode hingga tanggal 31 Desember 2025",
    bg: "/assets/images/bg2.png",
    images: ["/assets/images/ac1.png", "/assets/images/ac2.png", "/assets/images/ac3.png"],
  },
  {
    id: 3,
    variant: "solution",
    logo: "/assets/images/penguin.png",
    titleLines: ["All‑in‑One", "Water Solution"],
    bullets: [
      { icon: DevicePhoneMobileIcon, text: "Water Storage" },
      { icon: FunnelIcon, text: "Water Filtration" },
      { icon: TrashIcon, text: "Wastewater Management" },
    ],
    bg: "/assets/images/bg3.png",
    images: ["/assets/images/toren.png"],
  },
];

export default function PromoSlider() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;

  const prev = () => setIdx((p) => (p === 0 ? total - 1 : p - 1));
  const next = () => setIdx((p) => (p === total - 1 ? 0 : p + 1));
  const slide = slides[idx];

  // // Auto-slide
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     next();
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [idx]);

const DiscountLayout = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
    <div className="text-white space-y-2 max-w-md text-center"> {/* space-y dari 3 jadi 2 */}
      <h1 className="font-extrabold text-2xl md:text-4xl leading-tight">
        {slide.title}
      </h1>
      <div className="flex items-center justify-center gap-1 md:gap-2 text-lg md:text-2xl font-bold">
        <span>{slide.discountText}</span>
        <span className="text-3xl">+</span>
        <span>{slide.installment}</span>
      </div>
      <span className="inline-block bg-[#eb5d3e] px-3 py-1 text-xs md:text-sm font-semibold rounded">
        {slide.period}
      </span>
    </div>

    <div className="relative mt-8 lg:mt-0">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 w-43 h-40 bg-orange-500 rounded-full -z-10" />
      <div className="relative w-[280px] h-[160px]">
        <div className="absolute left-8 top-0 bg-white rounded-full p-4 w-38 h-38 shadow-md flex items-center justify-center -ml-8">
          <img src={slide.images[1]} alt="chair 2" className="w-30 h-30 object-contain" />
        </div>
        <div className="absolute left-30 top-0 bg-white rounded-full p-4 w-40 h-40 shadow-md flex items-center justify-center">
          <img src={slide.images[0]} alt="chair 1" className="w-32 h-32 object-contain" />
        </div>
      </div>
    </div>
  </div>
);

const DiscountOnlyLayout = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full px-4 lg:px-0">
    {/* Kiri: Teks */}
    <div className="text-white space-y-3 text-left max-w-xs md:max-w-sm">
      <h1 className="text-3xl md:text-4xl font-extrabold">{slide.discountText}</h1>
      <h2 className="text-5xl md:text-6xl font-extrabold">{slide.discountPercent}</h2>
      <span className="inline-block bg-[#eb5d3e] px-4 py-1 text-xs md:text-sm font-semibold rounded">
        {slide.period}
      </span>
    </div>

    {/* Kanan: Produk */}
    <div className="relative mt-6 lg:mt-0">
      {/* Card background */}
      <div className="absolute -right-4 -top-4 w-[330px] h-[180px] bg-orange-400/20 backdrop-blur-md rounded-2xl -z-10" />

      <div className="relative w-[330px] h-[180px] flex items-end justify-center gap-2 px-4 pb-4">
        {/* Tengah: besar */}
        <img src={slide.images[1]} alt="product-2" className="w-24 h-32 object-contain z-20" />
        {/* Kiri */}
        <img src={slide.images[0]} alt="product-1" className="w-20 h-28 object-contain z-10" />
        {/* Kanan */}
        <img src={slide.images[2]} alt="product-3" className="w-20 h-28 object-contain z-10" />
      </div>
    </div>
  </div>
);

  const SolutionLayout = () => (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
      <div className="text-white space-y-3 max-w-md">
        <img src={slide.logo} alt="logo" className="h-8 w-auto" />
        {slide.titleLines?.map((line) => (
          <h1 key={line} className="font-extrabold text-3xl md:text-4xl leading-tight">{line}</h1>
        ))}
        <div className="flex gap-6 mt-2 text-xs md:text-sm">
          {slide.bullets?.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center">
              <Icon className="w-6 h-6" />
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-8 lg:mt-0 w-96 h-55 bg-white shadow-xl rounded-tr-2xl rounded-br-2xl rounded-tl-[300px] flex items-center justify-center">
        {slide.images.map((src) => (
          <img key={src} src={src} alt="tank" className="object-contain mx-2" />
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (slide.variant === "discount") return <DiscountLayout />;
    if (slide.variant === "discountOnly") return <DiscountOnlyLayout />;
    return <SolutionLayout />;
  };

  return (
    <section className="relative w-full h-130 overflow-hidden select-none">
      <img src={slide.bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-start px-6 md:px-32">
        {renderContent()}
      </div>

      {/* Navigasi Kiri */}
      <button
        onClick={prev}
        aria-label="prev"
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#ffffffa1] hover:bg-[#ffffff] transition duration-300 p-2 rounded-full z-20 group"
      >
        <ChevronLeftIcon className="w-4 h-4 text-black" />
      </button>

      {/* Navigasi Kanan */}
      <button
        onClick={next}
        aria-label="next"
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#ffffffa1] hover:bg-[#ffffff] transition duration-300 p-2 rounded-full z-20 group"
      >
        <ChevronRightIcon className="w-4 h-4 text-black" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-[#522202]" : "w-2 bg-white/80"}`}
          />
        ))}
      </div>

      {/* WhatsApp */}
      <div className="absolute bottom-5 left-5 z-40">
        <div className="group relative flex items-center">
          <div className="absolute left opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 bg-white text-green-600 text-xs font-semibold shadow-md px-3 py-1 transition duration-300 whitespace-nowrap rounded-md">
            <p>Hubungi Kami</p>
            <p>Sekarang!</p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-transparent border-l-green-600" />
          </div>
          <div className="bg-white rounded-full w-15 h-15 flex items-center justify-center shadow-md transition duration-300 group-hover:translate-x-21">
            <img src="/assets/images/logo-whatsapp.png" alt="WhatsApp" className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
