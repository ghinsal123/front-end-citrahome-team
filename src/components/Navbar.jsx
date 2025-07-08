import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-300 py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center md:justify-between relative">
        <div className="w-full flex items-center justify-between md:justify-start">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#5c2b14] md:hidden"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>

          <div className="flex items-center gap-2 mx-auto md:mx-0">
            <img
              src="/assets/images/logocitrahome.jpeg"
              alt="Logo"
              className="h-12 w-auto"
            />
          </div>
        </div>

        <nav className="hidden md:flex gap-6 text-[#5c2b14] text-sm font-medium whitespace-nowrap">
            <a href="#" className="font-bold border-b-2 border-[#5c2b14]">Home</a>
            <a href="#">Produk</a>
            <a href="#">Promo</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
        </nav>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 flex flex-col space-y-2 text-[#5c2b14] text-sm font-medium px-2">
          <a href="#" className="font-bold border-b-2 border-[#5c2b14]">Home</a>
          <a href="#">Produk</a>
          <a href="#">Promo</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      )}
    </header>
  );
}
