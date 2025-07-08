import React from 'react';

const MozaikCard = () => {
  return (
    <div className="relative w-[320px] h-[210px]">
      {/* Card belakang (warna hijau kebiruan) */}
      <div className="absolute bottom-5 right-3 w-50 h-full bg-[#4F8686] rounded-xl z-0" />

      {/* Card depan (gambar mozaik) */}
      <div className="relative">
        <img
          src="assets/images/renovasi.png"
          alt="Mozaik"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default MozaikCard;
