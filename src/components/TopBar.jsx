import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { PhoneIcon } from "@heroicons/react/24/solid"; 

export default function TopBar() {
  return (
    <header className="bg-white border-t-4 border-orange-400 text-sm text-gray-700 pt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 pb-6">
        <div>
          <img src="/assets/images/logocitrahome.jpeg" alt="Logo" className="h-16 mb-2" />
          <p className="font-medium">Hubungi untuk promo eksklusif dari kami</p>
          <button className="mt-4 bg-[#f26a3e] hover:bg-[#e2552a] text-white px-4 py-2 rounded-md text-xs flex items-center gap-2">
            CONTACT US
            <PhoneIcon className="h-4 w-4 text-white" />
          </button>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Pemesanan & Bantuan</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://shopee.co.id/citrahome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/shopee2.png"
                  alt="Shopee"
                  className="h-6 hover:opacity-80 transition"
                />
              </a>
            </li>
            <li>
              <a
                href="https://tokopedia.com/citrahome"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/images/tokopedia2.png"
                  alt="Tokopedia"
                  className="h-4 hover:opacity-80 transition"
                />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">Tanya Jawab (FAQ)</a>
            </li>
          </ul>
        </div>

        {/* Temukan Kami */}
        <div>
          <h4 className="font-semibold mb-2">Temukan Kami</h4>
          <ul className="space-y-1">
            <li>Citra Home Bekasi</li>
            <li><FaInstagram className="inline mr-1" /> citrahome.official</li>
            <li><FaTiktok className="inline mr-1" /> citrahome.official</li>
          </ul>
        </div>

        {/* Tentang Kami */}
        <div>
          <h4 className="font-semibold mb-2">Citra Home</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Tentang Kami</a></li>
            <li><a href="#" className="hover:underline">Visi & Misi</a></li>
            <li><a href="#" className="hover:underline">Perjalanan Kami</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
