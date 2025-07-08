import React from "react";

export default function TokopediaButton() {
  return (
    <div className="flex gap-2">
      <a
        href="#"
        className="bg-[#33BB7C] hover:bg-[#00AA5B] text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1 transition"
      >
        <img src="/assets/images/tokopedia.png" alt="Tokopedia" className="w-4 h-4" />
        Tokopedia
      </a>
    </div>
  );
}
