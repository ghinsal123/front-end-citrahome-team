import React from "react";
import tokopediaIcon from '../assets/images/tokopedia.png';

export default function TokopediaButton () {

    return(
        <div className="flex gap-2">
        <a
          href="#"
          className="bg-[#33BB7C]  hover:bg-[#00AA5B] text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1"
        >
          <img src={tokopediaIcon} alt="Tokopedia" className="w-4 h-4" />
          tokopedia
        </a>
        </div>
    )

}