import React, { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

export default function BuyButton () {

    const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <button
      onClick={handleClick}
      className={`group flex items-center justify-between gap-2
        font-bold text-sm px-4 py-2 rounded-full transition-all duration-300
        ${
          isClicked
            ? "bg-[#f2f2f2] text-[#E9724C]"
            : "bg-[#adadad] text-white hover:bg-[#f2f2f2] hover:text-[#E9724C]"
        }`}
    >
      LIHAT SEMUA PRODUK

      <span
        className={`w-7 h-7 flex items-center justify-center 
          rounded-full transition-all duration-300
          ${
            isClicked
              ? "bg-[#E9724C] text-white"
              : "bg-white text-[#4f1c05] group-hover:bg-[#E9724C] group-hover:text-white"
          }`}
      >
        {isClicked ? (
          <ArrowDownIcon className="w-5 h-5" />
        ) : (
          <ArrowRightIcon className="w-5 h-5" />
        )}
      </span>
    </button>
  )
}