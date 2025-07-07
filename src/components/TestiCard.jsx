// TestimonialSlider.jsx
import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

import ava1 from '../assets/images/people1.png';
import ava2 from '../assets/images/people2.png';
import ava3 from '../assets/images/people3.png';

const data = [
  {
    id: 1,
    avatar: ava1,
    name: 'Budi Santoso',
    role: 'Kontraktor',
    quote:
      'Barangnya lengkap, kualitas oke, harga bersaing. Pelayanannya juga sangat membantu. Citra Home langganan setiap proyek.',
  },
  {
    id: 2,
    avatar: ava2,
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    quote:
      'Beli keramik dan cat buat renovasi rumah di sini, semuanya gampang, bisa tanya‑tanya dulu, lalu langsung diantar ke rumah. Terbaik!',
  },
  {
    id: 3,
    avatar: ava3,
    name: 'Andi Prasetyo',
    role: 'Tukang Bangunan',
    quote:
      'Citra Home ngasih solusi pas kita butuh material mendadak. Pelayanannya cepat dan barangnya bagus semua.',
  },
];

/* ---------- Card ---------- */
function Card({ item, featured }) {
  return (
    <div
      className={`relative w-64 md:w-72 flex flex-col items-center text-center px-6 pt-16 pb-10 rounded-2xl transition-all duration-300 ${
        featured
          ? 'bg-[#4d2a15] text-white scale-110 -translate-y-3 z-10 shadow-2xl'
          : 'bg-white text-[#222] scale-95 shadow-md opacity-80'
      }`}
    >
      {/* Avatar */}
      <img
        src={item.avatar}
        alt={item.name}
        className={`absolute -top-12 object-cover rounded-full shadow-md ${
          featured ? 'w-24 h-24' : 'w-20 h-20'
        }`}
      />

      <h3 className="mt-6 font-semibold text-lg">{item.name}</h3>
      <p className="text-xs opacity-80 mb-3">{item.role}</p>

      {/* Petik besar */}
      <span className="text-5xl font-serif mb-3 opacity-30 leading-none">“</span>

      <p className="text-sm leading-relaxed italic text-balance">"{item.quote}"</p>
    </div>
  );
}

/* ---------- Slider ---------- */
export default function TestimonialSlider() {
  const [center, setCenter] = useState(1);
  const [nudge, setNudge] = useState(0); // animasi geser: -1 kiri, 1 kanan, 0 netral
  const total = data.length;

  /* helper untuk animasi geser pendek */
  const shift = (dir) => {
    setNudge(dir);
    setTimeout(() => setNudge(0), 200); // kembali ke posisi netral
  };

  const prev = () => {
    shift(-1);
    setCenter((c) => (c - 1 + total) % total);
  };

  const next = () => {
    shift(1);
    setCenter((c) => (c + 1) % total);
  };

  const leftIdx = (center - 1 + total) % total;
  const rightIdx = (center + 1) % total;

  return (
    <div className="w-full flex justify-center py-10">
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* Panah kiri – kotak putih */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 bg-white text-[#4d2a15] p-2 rounded-md shadow hover:scale-110 transition"
          aria-label="Sebelumnya"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        {/* Kontainer kartu (geser ±12 px saat klik) */}
        <div
          className={`flex gap-6 justify-center items-center transition-transform duration-200 ${
            nudge === -1
              ? '-translate-x-3'
              : nudge === 1
              ? 'translate-x-3'
              : ''
          }`}
        >
          <Card item={data[leftIdx]} featured={false} />
          <Card item={data[center]} featured={true} />
          <Card item={data[rightIdx]} featured={false} />
        </div>

        {/* Panah kanan – kotak coklat */}
        <button
          onClick={next}
          className="absolute right-2 md:right-4 bg-[#4d2a15] text-white p-2 rounded-md shadow hover:scale-110 transition"
          aria-label="Berikutnya"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}