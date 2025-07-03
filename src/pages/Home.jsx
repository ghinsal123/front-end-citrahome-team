import React from "react";
import TextField from "../components/TextField";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 space-y-10 bg-white">

      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>
        <div className="space-y-8">
        <TextField placeholder="Contoh Input" />
        </div>
      </section>

      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Product Card 1</h2>
        <ProductCard />
      </section>
    </div>
    
  );
}
