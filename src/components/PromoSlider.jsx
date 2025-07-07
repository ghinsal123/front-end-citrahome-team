import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  FunnelIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

/* ------- local image imports ------- */
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";
import kursi1 from "../assets/images/kursi1.png";
import kursi2 from "../assets/images/kursi2.png";
import ac1 from "../assets/images/ac1.png";
import ac2 from "../assets/images/ac2.png";
import ac3 from "../assets/images/ac3.png";
import tankBundle from "../assets/images/toren.png";
import penguinLogo from "../assets/images/penguin.png";

const slides = [
  {
    id: 1,
    variant: "discount",
    title: "Promo Special Citra Home",
    discountText: "Diskon 10%",
    installment: "Cicilan 0%",
    period: "Periode hingga tanggal 31 Desember 2025",
    bg: bg1,
    images: [kursi1, kursi2],
  },
  {
    id: 2,
    variant: "discountOnly",
    discountText: "Diskon",
    discountPercent: "5%",
    period: "Periode hingga tanggal 31 Desember 2025",
    bg: bg2,
    images: [ac1, ac2, ac3],
  },
  {
    id: 3,
    variant: "solution",
    logo: penguinLogo,
    titleLines: ["All‑in‑One", "Water Solution"],
    bullets: [
      { icon: DevicePhoneMobileIcon, text: "Water Storage" },
      { icon: FunnelIcon, text: "Water Filtration" },
      { icon: TrashIcon, text: "Wastewater Management" },
    ],
    bg: bg3,
    images: [tankBundle],
  },
];

const Whatsapp = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6">
    <circle cx="12" cy="12" r="12" fill="#25D366" />
    <path
      fill="#fff"
      d="M16.7 14.4l-1.4-.6a1 1 0 00-.6-.1 2 2 0 01-1.4-.6 5 5 0 01-1.5-3.4 3 3 0 01.4-1.7.9.9 0 00-.9-1.2 7 7 0 00-2.4 1.1 2.8 2.8 0 00-.9 2.1 7 7 0 002 4.6 7.3 7.3 0 004.7 2 3.6 3.6 0 002.1-.7 4 4 0 001.1-2.5c0-.1 0-.2-.2-.3z"
    />
  </svg>
);

export default function PromoSlider() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const prev = () => setIdx((p) => (p === 0 ? total - 1 : p - 1));
  const next = () => setIdx((p) => (p === total - 1 ? 0 : p + 1));
  const slide = slides[idx];

const DiscountLayout = () => (
  <div className="w-full h-full flex flex-col lg:flex-row items-start justify-between text-white px-6 lg:px-20 py-10 relative">
    {/* Teks promo */}
    <div className="space-y-3 max-w-md z-10 flex flex-col items-center text-center">
      <h1 className="font-extrabold text-2xl md:text-4xl">{slide.title}</h1>

      <div className="flex flex-col gap-1 text-2xl md:text-3xl font-bold">
        <span>{slide.discountText}</span>
        <span className="text-3xl font-extrabold">+</span>
        <span>{slide.installment}</span>
      </div>

      <span className="inline-block bg-[#eb5d3e] px-4 py-1 text-[11px] md:text-sm font-semibold rounded-md">
        {slide.period}
      </span>
    </div>

    {/* Gambar kursi dan background bulat */}
    <div className="absolute bottom-38 right-10 lg:bottom-10 lg:right-10 w-[220px] h-[220px]">
      {/* Lingkaran oranye di belakang */}
      <div className="absolute w-32 h-29 bg-[#F26A3E] rounded-full top-5 left-32 -translate-x-1/2 -translate-y-1/2 -z-10" />

      {/* Kursi kiri */}
      <div className="absolute bottom-30 left-7 bg-white w-28 h-28 rounded-full flex items-center justify-center shadow-xl">
        <img
          src={slide.images[1]}
          alt="kursi-1"
          className="w-20 h-20 object-contain"
        />
      </div>
     {/* Kursi kanan */}
      <div className="absolute bottom-30 left-28 bg-white w-29 h-29 rounded-full flex items-center justify-center shadow-xl">
        <img
          src={slide.images[0]}
          alt="kursi-0"
          className="w-20 h-20 object-contain"
        />
      </div>
    </div>
  </div>
);


  const DiscountOnlyLayout = () => (
    <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
      <div className="text-white space-y-3 max-w-md">
        <h1 className="text-3xl md:text-4xl font-extrabold">{slide.discountText}</h1>
        <h2 className="text-5xl md:text-6xl font-extrabold">{slide.discountPercent}</h2>
        <span className="inline-block bg-[#eb5d3e] px-3 py-1 text-[11px] md:text-sm font-semibold rounded">
          {slide.period}
        </span>
      </div>
      <div className="relative mt-8 lg:mt-0">
        <div className="absolute inset-0 bg-orange-400/90 rounded-2xl w-80 h-40 -right-8 top-4 -z-10" />
        <div className="flex gap-6 pl-8 pr-12">
          {slide.images.map((src) => (
            <img key={src} src={src} alt="ac" className="w-24 h-24 object-contain" />
          ))}
        </div>
      </div>
    </div>
  );

  const SolutionLayout = () => (
    <div className="flex flex-col lg:flex-row items-center gap-10 w-full">
      <div className="text-white space-y-3 max-w-md">
        <img src={slide.logo} alt="logo" className="h-8 w-auto" />
        {slide.titleLines.map((l) => (
          <h1 key={l} className="font-extrabold text-3xl md:text-4xl leading-tight">
            {l}
          </h1>
        ))}
        <div className="flex gap-6 mt-2 text-xs md:text-sm">
          {slide.bullets.map(({ icon: Icon, text }) => (
            <div key={text} className="flex flex-col items-center">
              <Icon className="w-6 h-6" />
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl w-96 h-40 flex items-center justify-center shadow-xl mt-8 lg:mt-0">
        {slide.images.map((src) => (
          <img key={src} src={src} alt="tank" className="h-32 object-contain mx-2" />
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
    <section className="relative w-230 h-[500px] overflow-hidden select-none rounded-2xl shadow-lg">
      <img src={slide.bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
        {renderContent()}
      </div>

      <button onClick={prev} aria-label="prev" className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full z-20">
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      <button onClick={next} aria-label="next" className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 p-2 rounded-full z-20">
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-orange-600" : "w-2 bg-white/80"}`}
          />
        ))}
      </div>

      {/* WhatsApp Bubble */}
      <div className="absolute bottom-5 left-5 z-40">
        <div className="group relative flex items-center">
          <div className="absolute left opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 bg-white text-green-600 text-xs font-semibold shadow-md px-3 py-1 transition duration-300 whitespace-nowrap rounded-md">
            <p>Hubungi Kami</p>
            <p>Sekarang!</p>
            <div className="absolute bottom-0 left-0 w-0 h-0 border-t-[8px] border-l-[8px] border-t-transparent border-l-green-600"></div>
          </div>
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition duration-300 group-hover:translate-x-21">
            <Whatsapp />
          </div>
        </div>
      </div>
    </section>
  );
}
