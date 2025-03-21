import React from "react";
import heroImage from "../img/بنر متجر مجوهرات بلون اخضر نمط بسيط.png"; // المسار الصحيح

const HeroSection = () => {
  return (
    <section className="relative min-h-[100vh]">
      
      <img
        src={heroImage}
        alt="Hero"
        className="w-full object-cover absolute top-0 left-0 z-0"
      />
      {/* الطبقة الشفافة */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 z-8"></div>
      
      {/* النصوص فوق الصورة */}
      <div className="relative z-9 flex flex-col justify-center items-center text-center p-6 sm:p-12 md:p-20 lg:p-28 xl:p-80 h-full">
        <h2 className="text-3xl sm:text-1xl md:text-5xl lg:text-6xl font-bold text-[#ffcf7c] drop-shadow-lg">
          اكتشف الفخامة في كل تفصيلة
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mt-4">
          مجموعة مختارة من المجوهرات والإكسسوارات الراقية
        </p>
        <button className="mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-[#ffcf7c] text-black font-bold rounded-lg hover:bg-[#ffe7be] transition-all duration-300 shadow-md">
          تسوق الآن
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
