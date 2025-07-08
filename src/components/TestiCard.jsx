import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const data = [
  {
    id: 1,
    avatar: '/assets/images/people1.png',
    name: 'Budi Santoso',
    role: 'Kontraktor',
    quote:
      'Barangnya lengkap, kualitas oke, harga bersaing. Pelayanannya juga sangat membantu. Citra Home langganan setiap proyek.',
  },
  {
    id: 2,
    avatar: '/assets/images/people2.png',
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    quote:
      'Beli keramik dan cat buat renovasi rumah di sini, semuanya gampang, bisa tanya‑tanya dulu, lalu langsung diantar ke rumah. Terbaik!',
  },
  {
    id: 3,
    avatar: '/assets/images/people3.png',
    name: 'Andi Prasetyo',
    role: 'Tukang Bangunan',
    quote:
      'Citra Home ngasih solusi pas kita butuh material mendadak. Pelayanannya cepat dan barangnya bagus semua.',
  },
];

function TestimonialCard({ item, featured }) {
  return (
    <div
      className={`relative w-64 md:w-72 flex flex-col items-center text-center px-6 pt-16 pb-10 rounded-2xl transition-all duration-300 ${
        featured
          ? 'bg-[#4d2a15] text-white scale-110 -translate-y-3 z-10 shadow-xl'
          : 'bg-white text-gray-800 scale-95 shadow-sm opacity-80'
      }`}
    >
      <img
        src={item.avatar}
        alt={item.name}
        className={`absolute -top-12 object-cover rounded-full shadow-md border-4 ${
          featured ? 'w-24 h-24 border-white' : 'w-20 h-20 border-gray-200'
        }`}
      />
      <h3 className="mt-6 font-semibold text-lg">{item.name}</h3>
      <p className="text-xs opacity-80 mb-2">{item.role}</p>
      <span className="text-5xl font-serif text-white/30 mb-3 leading-none">“</span>
      <p className="text-sm italic leading-relaxed">{item.quote}</p>
    </div>
  );
}

export default function TestimonialSlider() {
  const [center, setCenter] = useState(1);
  const [nudge, setNudge] = useState(0);
  const total = data.length;
  const left = (center - 1 + total) % total;
  const right = (center + 1) % total;

  const shift = (dir) => {
    setNudge(dir);
    setTimeout(() => setNudge(0), 200);
  };

  const prev = () => {
    shift(-1);
    setCenter((c) => (c - 1 + total) % total);
  };

  const next = () => {
    shift(1);
    setCenter((c) => (c + 1) % total);
  };

  return (
    <section className="w-full flex justify-center py-12 bg-[#fafafa]">
      <div className="relative max-w-5xl w-full flex items-center justify-center px-4 md:px-0">
        <button
          onClick={prev}
          aria-label="Sebelumnya"
          className="absolute left-2 md:left-4 bg-white text-[#4d2a15] p-2 rounded-md shadow hover:scale-110 transition"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>

        <div
          className={`flex gap-6 justify-center items-center transition-transform duration-200 ${
            nudge === -1
              ? '-translate-x-3'
              : nudge === 1
              ? 'translate-x-3'
              : ''
          }`}
        >
          <TestimonialCard item={data[left]} featured={false} />
          <TestimonialCard item={data[center]} featured={true} />
          <TestimonialCard item={data[right]} featured={false} />
        </div>

        <button
          onClick={next}
          aria-label="Berikutnya"
          className="absolute right-2 md:right-4 bg-[#4d2a15] text-white p-2 rounded-md shadow hover:scale-110 transition"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
