import React from "react";
import PromoSlider from "../components/PromoSlider";
import Search from "../components/Search";
import CategoryTabs from "../components/CategoryTabs";
import ProductCardPro from "../components/ProductCardPro";
import TestimonialSlider from "../components/TestimonialSlider";
import MapsOp2 from "../components/MapsOp2";



export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 space-y-10 bg-white">
      <section>
        <div>
          <PromoSlider/>
        </div>
      </section>
      <section>
        <div>
          <Search/>
        </div>
      </section>
      <section>
        <div>
          <CategoryTabs/>
        </div>
      </section>      
      <section>
        <div>
          <ProductCardPro/>
        </div>
      </section>
      <section>
        <div>
          <TestimonialSlider/>
        </div>
      </section>
      <section>
        <div>
          <MapsOp2/>
        </div>
      </section>
</div>
  );
}