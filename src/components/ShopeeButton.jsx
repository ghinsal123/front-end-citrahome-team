import React from "react";
import shopeeIcon from '../assets/images/shopee.png';

export default function ShopeeButton () {

    return(
        <div className="flex gap-2">
        <a
          href="#"
          className="bg-[#F17157] hover:bg-[#EE4D2D]  text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1"
        >
          <img src={shopeeIcon} alt="Shopee" className="w-4 h-4" />
          shopee
        </a>
        </div>
    )

}