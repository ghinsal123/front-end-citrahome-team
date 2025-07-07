/* ─── src/components/PromoSlider.jsx ───
   Versi final: layout rapih, gambar proporsional, container rounded‑xl + tombol WA */
import React, { useState } from "react";
import {
  DevicePhoneMobileIcon,
  FunnelIcon,
  TrashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import waimg from "../assets/images/logo-whatsapp.png";

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

export default function PromoSlider() {
  const [idx, setIdx] = useState(0);
  const total = slides.length;
  const prev = () => setIdx((p) => (p === 0 ? total - 1 : p - 1));
  const next = () => setIdx((p) => (p === total - 1 ? 0 : p + 1));
  const slide = slides[idx];

const DiscountLayout = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
    {/* ─── Teks promo ─── */}
    <div className="text-white space-y-3 max-w-md">
      <h1 className="font-extrabold text-2xl md:text-4xl leading-tight">
        {slide.title}
      </h1>

      <div className="flex items-center gap-2 text-lg md:text-2xl font-bold">
        <span>{slide.discountText}</span>
        <span className="text-3xl">+</span>
        <span>{slide.installment}</span>
      </div>

      <span className="inline-block bg-[#eb5d3e] px-3 py-1 text-[11px] md:text-sm font-semibold rounded">
        {slide.period}
      </span>
    </div>

    {/* ─── Gambar kursi + lingkaran oranye ─── */}
    <div className="relative mt-8 lg:mt-0">
      {/* lingkaran oranye — turun ±32 px */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-50 h-50 bg-orange-500 rounded-full -z-10" />

      {/* dua kursi nempel */}
      <div className="flex">
        {/* kursi kiri */}
        <div className="bg-white rounded-full p-4 w-43 h-43 shadow-md flex items-center justify-center">
          <img src={kursi2} alt="chair 2" className="w-35 h-35 object-contain" />
        </div>
        {/* kursi kanan – geser lebih rapat */}
        <div className="bg-white rounded-full p-4 w-43 h-43 shadow-md flex items-center justify-center -ml-8">
          <img src={kursi1} alt="chair 1" className="w-35 h-35 object-contain" />
        </div>
      </div>
    </div>
  </div>
);

  const DiscountOnlyLayout = () => (
  <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
      {/* ─── Teks promo ─── */}
      <div className="text-white space-y-3 max-w-md">
        <h1 className="text-3xl md:text-4xl font-extrabold">{slide.discountText}</h1>
        <h2 className="text-5xl md:text-6xl font-extrabold">{slide.discountPercent}</h2>
        <span className="inline-block bg-[#eb5d3e] px-3 py-1 text-[11px] md:text-sm font-semibold rounded">
          {slide.period}
        </span>
      </div>

      {/* ─── Kotak oranye + gambar AC ─── */}
      <div className="relative mt-8 lg:mt-0">
        {/* kotak oranye (gradien, sudut kanan‑atas rounded) */}
        <div className="absolute -right-6 top-4 w-80 h-40
                        bg-gradient-to-bl from-orange-500/90 to-orange-500/0
                        rounded-tr-3xl -z-10" />

        {/* container gambar */}
        <div className="relative w-80 h-40">
          {/* AC 2 – tengah, lebih besar & lebih tinggi */}
          <img
            src={ac2}
            alt="ac2"
            className="absolute left-1/2 -translate-x-1/2 top-0 w-28 h-28 object-contain z-20"
          />

          {/* baris AC bawah (gap kecil) */}
          <div className="absolute bottom-0 inset-x-0 flex justify-center gap-2">
            {/* AC 3 – kiri */}
            <img
              src={ac3}
              alt="ac3"
              className="w-24 h-20 object-contain z-10"
            />
            {/* AC 1 – kanan, urutan kedua supaya di kanan */}
            <img
              src={ac1}
              alt="ac1"
              className="w-24 h-30 object-contain z-10"
            />
          </div>
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
  <section className="relative w-full max-w-5xl h-[580px] mx-auto overflow-hidden select-none shadow-lg">
      <img src={slide.bg} alt="bg" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-20">
        {renderContent()}
      </div>

      <button onClick={prev} aria-label="prev" className="absolute left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-white p-2 rounded-full z-20">
        <ChevronLeftIcon className="w-6 h-6 text-black" />
      </button>
      <button onClick={next} aria-label="next" className="absolute right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-white p-2 rounded-full z-20">
        <ChevronRightIcon className="w-6 h-6 text-black" />
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
            <img src={waimg} alt="WhatsApp" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
