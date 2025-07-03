import React from "react";
import TextField from "../components/TextField";
import AllProduct from "../components/AllProduct";
import ProductCard from "../components/ProductCard";
import Popular from "../components/Popular";
import Best from "../components/Best";
import ShopeeButton from "../components/ShopeeButton";
import TokopediaButton from "../components/TokopediaButton";


export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 space-y-10 bg-white">
      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>
        <div className="space-y-6">
          <TextField placeholder="Placeholder" />
        </div>
      </section>
      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>
        <div className="space-y-6">
          <AllProduct />
        </div>
      </section>
      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>
        <div className="space-y-6">
          <ProductCard />
        </div>
      </section>
      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>
        <div className="space-y-6 max-w-xs">
          <Popular src="/img/popular1.jpg" />
        </div>
      </section>
      <section>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Preview TextField</h2>
        <div className="space-y-6 max-w-xs">
          <Best src="/img/best1.jpg" />
        </div>
      </section>

      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Shopee Button</h2>
        <ShopeeButton />
      </section>

        <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Tokopedia Button</h2>
        <TokopediaButton />
      </section>
    </div>
  );
}
