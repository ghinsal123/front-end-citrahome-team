import React, { useState } from "react";

const categories = ["Keramik", "Beds", "Sofa", "Lamp"];

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState("Keramik");

  return (
    <div className="bg-[#522202] rounded-xl p-2 flex justify-between items-center max-w-md mx-auto">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveTab(category)}
          className={`px-4 py-2 text-sm font-semibold rounded-md transition-all
            ${
              activeTab === category
                ? "bg-white text-[#5B2C06]"
                : "text-white"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
