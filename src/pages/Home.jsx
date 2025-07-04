import React from "react";
import TextField from "../components/TextField";
import AllProduct from "../components/AllProduct";
import ProductCard from "../components/ProductCard";
import Popular from "../components/Popular";
import Best from "../components/Best";
import ShopeeButton from "../components/ShopeeButton";
import TokopediaButton from "../components/TokopediaButton";
import BuyButton from "../components/BuyButton";
import HeroImage from '../components/HeroImage'
import ViewButton from "../components/ViewButton";
import Hubungi from "../components/Hubungi";
import VisitButton from "../components/VisitButton";
import Map from "../components/Map";
import Email from "../components/Email";


export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 space-y-10 bg-white">
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview TextField</h2>
        <div className="space-y-6">
          <TextField placeholder="Placeholder" />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview All Products</h2>
        <div className="space-y-6">
          <AllProduct />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Product Card</h2>
        <div className="space-y-6">
          <ProductCard />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Popular</h2>
        <div className="space-y-6 max-w-xs">
          <Popular src="/img/popular1.jpg" />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Best</h2>
        <div className="space-y-6 max-w-xs">
          <Best src="/img/best1.jpg" />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Shopee Button</h2>
        <div className="space-y-6">
        <ShopeeButton />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Tokopedia Button</h2>
        <div className="space-y-6">
          <TokopediaButton />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Beli</h2>
        <div className="space-y-6">
        <BuyButton />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Hero Image</h2>
        <div className="p-6 space-y-6">
          <HeroImage />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Lihat - Ketika di Klik </h2>
        <div className="space-y-6">
          <ViewButton/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Hubungi</h2>
        <div className="space-y-6">
          <Hubungi placeholder="Placeholder" />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Visit </h2>
        <div className="space-y-6">
          <VisitButton />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Map</h2>
        <div className="space-y-6">
          <Map />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Email</h2>
        <div className="space-y-6">
          <Email placeholder="Placeholder" />
        </div>
      </section>
    </div>
  );
}
