import React from "react";
import Navbar from "../components/Navbar";
import PromoSlider from "../components/PromoSlider";
import Search from "../components/Search";
import CategoryTabs from "../components/CategoryTabs";
import ProductCardPro from "../components/ProductCardPro";
import RenovasiTamanCard from "../components/RenovasiTamanCard";
import TestimonialSlider from "../components/TestimonialSlider";
import MapsOp2 from "../components/MapsOp2";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="w-full min-h-screen p-6 space-y-10 bg-white">
      <section>
        <div>
          <Navbar/>
        </div>
      </section>
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
          <RenovasiTamanCard/>
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
      <section>
        <div>
          <TopBar/>
        </div>
      </section>
      <section>
        <div>
          <Footer/>
        </div>
      </section>
</div>
  );
}