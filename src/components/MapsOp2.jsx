import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function MapsOp2() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white p-6 rounded-xl">
      {/* ─── Teks & Tombol ─── */}
      <div className="text-center lg:text-left space-y-3 max-w-md">
        <h2 className="text-2xl md:text-3xl font-extrabold text-neutral-900 leading-snug">
          Kunjungi Citra <br /> Home Sekarang
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Bangun dan renovasi lebih mudah dengan bahan <br />
          bangunan berkualitas. Temukan kami langsung di toko <br />
          atau hubungi untuk konsultasi cepat.
        </p>

        <button className="bg-[#f26a3e] hover:bg-[#e2552a] text-white text-sm font-semibold px-5 py-2 rounded-lg inline-flex items-center gap-2 transition">
          Temukan citra home di daerah kamu
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>

      {/* ─── Maps ─── */}
      <div className="w-full lg:w-[520px] h-[240px] rounded-xl overflow-hidden shadow-lg transition duration-300 filter brightness-75 hover:brightness-100">
        <iframe
          src="https://www.google.com/maps?q=-6.2494068,106.9403638&z=15&output=embed"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Citra Home Map Location"
        />
      </div>
    </div>
  );
}
