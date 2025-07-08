import React from "react";

export default function MapsOp2() {
  return (
    <div className="w-[520px] h-[240px] rounded-xl overflow-hidden shadow-lg transition duration-300 filter brightness-75 hover:brightness-100">
      <iframe
        src="https://www.google.com/maps?q=-6.2494068,106.9403638&z=15&output=embed"
        className="w-full h-full"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Citra Home Map Location"
      />
    </div>
  );
}
