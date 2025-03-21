import React, { useState } from "react";
import logo from "../img/Black and Gold Elegant Luxury Jewellery Store Logo (1).png"; // المسار الصحيح للوغو

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative flex justify-between items-center p-4 border-b border-gray-700 bg-black z-10">
      {/* اللوغو */}
      <img src={logo} alt="Elite Gem Logo" className="h-12" />
      
      {/* زر القائمة (للشاشات الصغيرة) */}
      <button 
        className="lg:hidden text-white z-20" 
        onClick={toggleMenu}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* روابط القائمة */}
      <nav className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'} absolute lg:relative top-0 left-0 w-full bg-black lg:bg-transparent lg:flex-row lg:space-x-6 p-6 lg:p-0 z-10`}>
        <ul className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-6 w-full text-center">
          <li><a href="#" className="text-white hover:text-[#ffe7be] transition">الرئيسية</a></li>
          <li><a href="#products" className="text-white hover:text-[#ffe7be] transition">المنتجات</a></li>
          <li><a href="#about" className="text-white hover:text-[#ffe7be] transition">عن المتجر</a></li>
          <li><a href="#cart" className="text-white hover:text-[#ffe7be] transition">سلة التسوق</a></li>
        </ul>
      </nav>

      {/* مربع البحث */}
      <input 
        type="text" 
        placeholder="ابحث هنا..." 
        className="p-2 w-64 rounded bg-gray-800 text-white focus:ring-2 focus:ring-[#ffcf7c] outline-none hidden lg:block"
      />
    </header>
  );
};

export default Header;
