import React from "react";
import semenImg from '../assets/images/semen.png';
import shopeeIcon from '../assets/images/shopee.png';
import tokopediaIcon from '../assets/images/tokopedia.png';



export default function ProductCard () {
    return(
        <div className="w-60 bg-white p-4 rounded-2xl shadow-md space-y-3">
        <div className="relative rounded-xl overflow-hidden shadow-md group">  
        <img src={semenImg} alt="Semen Tiga Roda" 
        className="rounded-xl object-cover h-68 w-53"
      />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-25 transition duration-300"></div>
        </div>
      <div>
        <h3 className="font-semibold text-brown-800 text-base">Semen Tiga Roda</h3>
        <p className="text-red-500 font-bold text-sm">Rp. 50.000</p>
      </div>

      <div className="flex gap-2">
        <a
          href="#"
          className="bg-[#F17157] hover:bg-[#EE4D2D]  text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1"
        >
          <img src={shopeeIcon} alt="Shopee" className="w-4 h-4" />
          shopee
        </a>
        <a
          href="#"
          className="bg-[#33BB7C]  hover:bg-[#00AA5B] text-white text-sm font-semibold px-3 py-1 rounded-md flex items-center gap-1"
        >
           <img src={tokopediaIcon} alt="Tokopedia" className="w-4 h-4" />
          tokopedia
        </a>
      </div>
        </div>
    );
}