import React, { useState } from 'react';

/* ─── contoh import avatar ─── */
import ava1 from '../assets/images/people1.png';
import ava2 from '../assets/images/people2.png';
import ava3 from '../assets/images/people3.png';
import ava4 from '../assets/images/people1.png';
import ava5 from '../assets/images/people2.png';
import ava6 from '../assets/images/people3.png';

const data = [
  {
    id: 1,
    avatar: ava1,
    name: 'Budi Santoso',
    role: 'Kontraktor',
    quote:
      'Barangnya lengkap, kualitas oke, harga bersaing. Pelayanannya juga sangat membantu. Citra Home langganan setiap proyek.',
  },
  {
    id: 2,
    avatar: ava2,
    name: 'Siti Aminah',
    role: 'Ibu Rumah Tangga',
    quote:
      'Beli keramik & cat renovasi di sini. Bisa konsultasi dulu, lalu diantar ke rumah. Terbaik!',
  },
  {
    id: 3,
    avatar: ava3,
    name: 'Andi Prasetyo',
    role: 'Tukang Bangunan',
    quote:
      'Citra Home selalu ada pas butuh material mendadak. Cepat & barang bagus.',
  },
  {
    id: 4,
    avatar: ava4,
    name: 'Gabriela Anastasya',
    role: 'Ibu Rumah Tangga',
    quote:
      'Lorem ipsum dolor sit amet consectetur. Sed non id dui aliquet tincidunt.',
  },
  {
    id: 5,
    avatar: ava5,
    name: 'Rudi Hartono',
    role: 'Arsitek',
    quote:
      'Pilihan material lengkap, staff ramah. Rekomendasi banget buat proyek saya.',
  },
];

/* -------- komponen kartu -------- */
function Card({ item, featured }) {
  return (
    <div
      className={`relative w-64 md:w-72 flex flex-col items-center text-center rounded-[20px] shadow-md px-6 py-10 transition-all duration-300 ${
        featured
          ? 'bg-[#4d2a15] text-white scale-100'
          : 'bg-white text-[#222] scale-90'
      }`}
    >
      <img
        src={item.avatar}
        alt={item.name}
        className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full object-cover border-4 border-white shadow"
      />

      <h3 className="mt-8 font-semibold text-lg">{item.name}</h3>
      <p className="text-xs opacity-80 mb-4">{item.role}</p>

      <span className="text-3xl font-serif opacity-60 mb-3">“</span>

      <p className="text-sm leading-relaxed italic">{item.quote}</p>
    </div>
  );
}

/* -------- slider -------- */
export default function TestimonialSlider() {
  const [center, setCenter] = useState(0); // indeks kartu tengah
  const total = data.length;

  const prev = () => setCenter((c) => (c - 1 + total) % total);
  const next = () => setCenter((c) => (c + 1) % total);

  // ambil indeks untuk kiri‑tengah‑kanan
  const leftIdx = (center - 1 + total) % total;
  const rightIdx = (center + 1) % total;

  return (
    <div className="w-full flex items-center justify-center gap-4">
      {/* panah kiri */}
      <button
        onClick={prev}
        className="text-2xl font-bold text-[#4d2a15] p-2 hover:scale-110 transition"
      >
        ‹
      </button>

      {/* tiga kartu */}
      <div className="flex gap-6">
        <Card item={data[leftIdx]} featured={false} />
        <Card item={data[center]} featured={true} />
        <Card item={data[rightIdx]} featured={false} />
      </div>

      {/* panah kanan */}
      <button
        onClick={next}
        className="text-2xl font-bold text-[#4d2a15] p-2 hover:scale-110 transition"
      >
        ›
      </button>
    </div>
  );
}


