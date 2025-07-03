import React from "react";
import { ShoppingBagIcon} from "@heroicons/react/24/outline";

export default function BuyButton () {

    return(
    <button
      className="group flex items-center justify-between gap-2
        font-bold text-sm px-4 py-2 rounded-full
        text-[#FF6464] bg-white
        hover:bg-[#FF6464] hover:text-white transition-all duration-300"
    >
      BELI SEKARANG

      <span
        className="w-7 h-7 flex items-center justify-center 
          rounded-full bg-[#FF6464] text-white 
          group-hover:bg-white group-hover:text-[#FF6464] transition-all duration-300"
      >
          <ShoppingBagIcon className="w-5 h-5" />
      </span>
    </button>
    )

}