import React from "react";
import TextField from "../components/TextField";
import AllProduct from "../components/AllProduct";
import ProductCard from "../components/ProductCard";
import Popular from "../components/Popular";
import Best from "../components/Best";
import ShopeeButton from "../components/ShopeeButton";
import TokopediaButton from "../components/TokopediaButton";
import BuyButton from "../components/BuyButton";
import HeroImage from "../components/HeroImage";
import ViewButton from "../components/ViewButton";
import Hubungi from "../components/Hubungi";
import VisitButton from "../components/VisitButton";
import Map from "../components/Map";
import MessageButton from "../components/MessageButton";
import Image from "../components/Image";
import Email from "../components/Email";
import Message from "../components/Message";
import Logo from "../components/Logo";
import Hero from "../components/Hero";
import CategoryTabs from "../components/CategoryTabs";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialSlider from "../components/TestimonialSlider";
import ProductCardPro from "../components/ProductCardPro";
import Caraosel from "../components/Caraosel";
import Produk from "../components/Produk";
import LogoSlider from "../components/LogoSlider";
import TestiCard from "../components/TestiCard";
import PromoSlider from "../components/PromoSlider";
import ClaimButton from "../components/ClaimButton";
import CallButton from "../components/CallButton";
import MapsOp2 from "../components/MapsOp2";





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
        <h2 className="font-bold text-gray-800 mb-2">Preview Image</h2>
        <div className="space-y-6">
          <Image />
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
        <h2 className="font-bold text-gray-800 mb-2">Preview Beli</h2>
        <div className="space-y-6">
          <BuyButton />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Lihat - Ketika di Klik </h2>
        <div className="space-y-6">
          <ViewButton/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Hero Image</h2>
        <div className="space-y-6">
          <HeroImage />
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
        <h2 className="font-bold text-gray-800 mb-2">Preview Message Button</h2>
        <div className="space-y-6">
          <MessageButton />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Email</h2>
        <div className="space-y-6">
          <Email placeholder="Placeholder" />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Message</h2>
        <div className="space-y-6">
          <Message placeholder="Placeholder" />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Logo</h2>
        <div className="space-y-6">
          <Logo/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Hero </h2>
        <div className="space-y-6">
        <Hero />
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Category Tabs </h2>
        <CategoryTabs />
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Testi Card</h2>
        <TestimonialCard />
      </section>
      <section className="py-8">
        <h2 className="font-bold text-gray-800 mb-2">Preview Testi Slider</h2>
       <TestimonialSlider />
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Claim Button</h2>
        <div className="space-y-6">
          <ClaimButton/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Call Button</h2>
        <div className="space-y-6">
          <CallButton/>
        </div>
      </section>
       <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Maps Op 2</h2>
        <div className="space-y-6">
          <MapsOp2/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Product Card Pro</h2>
       <ProductCardPro />
        <h2 className="font-bold text-gray-800 mb-2">Preview Caroesel</h2>
        <div className="space-y-6">
          <Caraosel/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Produk</h2>
        <div className="space-y-6">
          <Produk/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Logo</h2>
        <div className="space-y-6">
          <LogoSlider/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Testi Card</h2>
        <div className="space-y-6">
          <TestiCard/>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Promo</h2>
        <div className="space-y-6">
          <PromoSlider/>
        </div>
      </section>
    </div>
  );
}
