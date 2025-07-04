import React from 'react';

// Import semua logo dari src/assets/images/
import rucikaLogo from '../assets/images/rucika.png';
import philipsLogo from '../assets/images/philips.png';
import holcimLogo from '../assets/images/holcim.png';
import makitaLogo from '../assets/images/makita.png';
import panasonicLogo from '../assets/images/panasonic.png';
import duluxLogo from '../assets/images/dulux.png';
import nipponLogo from '../assets/images/nippon.png';

// Array objek logo pakai import hasil atas
const brands = [
  { name: 'Rucika', src: rucikaLogo },
  { name: 'Philips', src: philipsLogo },
  { name: 'Holcim', src: holcimLogo },
  { name: 'Makita', src: makitaLogo },
  { name: 'Panasonic', src: panasonicLogo },
  { name: 'Dulux', src: duluxLogo },
  { name: 'Nippon', src: nipponLogo },
];

export default function BrandLogos() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-white">
      {brands.map((brand) => (
        <div
          key={brand.name}
          className="w-28 h-16 flex items-center justify-center group"
          title={brand.name}
        >
        <img
        src={brand.src}
        alt={`${brand.name} logo`}
        className="w-full h-full object-contain grayscale group-hover:grayscale-0 
                    transition duration-300 transform group-hover:scale-105"
        />
        </div>
      ))}
    </div>
  );
}
