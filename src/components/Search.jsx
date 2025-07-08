import React from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function Search() {

    return(
         <div className="mt-6 flex items-center justify-center">
          <div className="relative w-200">
            <input
              type="text"
              placeholder="Temukan Produk Pilihan di Citra Home ..."
              className="w-full rounded-full py-2 pl-5 pr-10 text-black placeholder:black bg-white/20 backdrop-blur-md focus:outline-none border border-black/30"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-[#773d20] hover:bg-[#5e2f17] p-2 rounded-full">
              <MagnifyingGlassIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
    )
}