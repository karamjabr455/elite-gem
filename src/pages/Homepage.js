import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedProducts from "../components/FeaturedProducts"; 
import OurServices from "../components/OurServices";

import SpecialOffers from "../components/SpecialOffers";
import Footer from "../components/Footer";


const Homepage = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroSection />
      <OurServices />
      <FeaturedProducts />
      <SpecialOffers />
      <Footer />

    </div>
  );
};

export default Homepage;
