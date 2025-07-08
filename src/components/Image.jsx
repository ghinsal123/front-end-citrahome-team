import React from "react";

export default function Image() {
  return (
    <div className="relative h-64 w-48 overflow-hidden rounded-xl shadow-md group">
      <img
        src="/assets/images/semen.png"
        alt="Semen Tiga Roda"
        className="h-full w-full object-cover transition duration-300 ease-in-out filter brightness-75 group-hover:brightness-100"
      />
    </div>
  );
}
