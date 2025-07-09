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
    <div className="w-full bg-white">
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
        <div className="px-10">
          <CategoryTabs/>
        </div>
      </section>      
      <section>
        <div className="px-10">
          <ProductCardPro/>
        </div>
      </section>
      <section>
        <div className="px-10">
          <RenovasiTamanCard/>
        </div>
      </section>
      <section>
        <div className="px-10">
          <TestimonialSlider/>
        </div>
      </section>
      <section>
        <div className="px-17">
          <MapsOp2/>
        </div>
      </section>
      <section>
        <div className="px-22">
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