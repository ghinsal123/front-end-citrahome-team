import React, { useState } from "react";

const categories = ["Keramik", "Beds", "Sofa", "Lamp"];

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("Keramik");

  return (
    <div className="max-w-md mx-auto">
      {/* Judul */}
      <h2 className="text-center text-xl font-extrabold text-[#522202] mb-4 ">
        Best Selling Produk
      </h2>

      {/* Tabs */}
      <div className="bg-[#522202] rounded-xl p-2 flex justify-between items-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-all
              ${
                activeTab === category
                  ? "bg-white text-[#5B2C06]"
                  : "text-white hover:bg-[#6c3210]"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
