import React from 'react';

export default function AllProduct({ label = "ALL PRODUCTS", underlineOnHover = true }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-3 group font-semibold tracking-wide text-[#502314] hover:text-[#38140A] focus:outline-none focus:ring-0 transition"
    >
      <span
        className={`${
          underlineOnHover ? 'group-hover:underline underline-offset-4 decoration-2' : ''
        }`}
      >
        {label}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 transition-transform group-hover:translate-x-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 12H3.75m13.5 0l-4.5-4.5m4.5 4.5l-4.5 4.5"
        />
      </svg>
    </button>
  );
}