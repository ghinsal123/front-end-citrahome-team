import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

export default function ClaimButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 
        bg-[#E9724C] hover:bg-[#d65c36] 
        text-white font-semibold px-6 py-3 
        rounded-lg transition duration-300"
    >
      Klaim Sekarang
      <ShoppingCartIcon className="w-5 h-5" />
    </button>
  );
}
