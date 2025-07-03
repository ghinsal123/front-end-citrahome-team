// src/components/PopularCard.jsx
import React from 'react'

/**
 * @typedef {Object} BestProps
 * @property {string} src - URL gambar
 * @property {string} [label] - Label opsional
 */

/**
 * @param {BestProps} props
 */

export default function Best({ src, label = '#BestForHouse' }) {
  return (
    <div className="group relative h-48 w-full overflow-hidden rounded-2xl shadow-md">
      {/* gambar */}
      <img
        src={src}
        alt={label}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* overlay gradasi */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-60" />

      {/* teks */}
      <span className="absolute bottom-4 left-4 z-10 text-lg font-bold text-white">
        {label}
      </span>
    </div>
  )
}
