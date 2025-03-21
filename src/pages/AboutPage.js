import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GiDiamondRing, GiStarsStack } from 'react-icons/gi';
import { RiCustomerService2Fill } from 'react-icons/ri';

// استيراد الصور
import heroBanner from '/img/_A high-end jewelry store banner showcasing a luxurious wedding jewelry set, including a necklace, earrings, and a ring, all crafted from 18K white gold and adorned with sparkling diamonds. The jewelry pieces sh (1).jpg';
import storeImage from '/img/_A high-end jewelry store banner showcasing a luxurious wedding jewelry set, including a necklace, earrings, and a ring, all crafted from 18K white gold and adorned with sparkling diamonds. The jewelry pieces sh (2).jpg';
import craftmanship from '/img/_A high-end jewelry store banner showcasing a luxurious wedding jewelry set, including a necklace, earrings, and a ring, all crafted from 18K white gold and adorned with sparkling diamonds. The jewelry pieces sh (3).jpg';
import quality from '/img/_A high-end jewelry store banner showcasing a luxurious wedding jewelry set, including a necklace, earrings, and a ring, all crafted from 18K white gold and adorned with sparkling diamonds. The jewelry pieces should.jpg';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={heroBanner}
          alt="Elite Gem Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-[#ffcf7c] font-bold text-center">
          ELITE GEM عن متجر 
          </h1>
        </div>
      </div>

      {/* Store Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-3xl text-[#ffcf7c] font-bold mb-6">قصتنا</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              منذ عام 2010، بدأنا رحلتنا في عالم المجوهرات الفاخرة بشغف لا يضاهى للجمال والتميز. في إليت جيم، نؤمن بأن كل قطعة مجوهرات تحكي قصة فريدة.
            </p>
            <p className="text-gray-300 leading-relaxed">
              نفخر بتقديم مجموعة استثنائية من المجوهرات المصممة بعناية فائقة، مستخدمين أجود أنواع الألماس والأحجار الكريمة والمعادن النفيسة.
            </p>
          </div>
          <div>
            <img
              src={storeImage}
              alt="Elite Gem Store"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Craftsmanship Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={craftmanship}
                alt="Craftmanship"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="text-right">
              <h2 className="text-3xl text-[#ffcf7c] font-bold mb-6">الحرفية والجودة</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                نستثمر في أحدث تقنيات صناعة المجوهرات مع الحفاظ على التقاليد العريقة في الحرفية اليدوية.
              </p>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center justify-end gap-2">
                  <span>شهادات الجودة العالمية</span>
                  <span className="text-[#ffcf7c]">✓</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>فحص جودة صارم لكل قطعة</span>
                  <span className="text-[#ffcf7c]">✓</span>
                </li>
                <li className="flex items-center justify-end gap-2">
                  <span>ضمان مدى الحياة</span>
                  <span className="text-[#ffcf7c]">✓</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Quality Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <h2 className="text-3xl text-[#ffcf7c] font-bold mb-6">معايير الجودة</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              نلتزم بأعلى معايير الجودة العالمية في اختيار وتصنيع مجوهراتنا، مع التركيز على كل تفصيل صغير لضمان رضا عملائنا.
            </p>
          </div>
          <div>
            <img
              src={quality}
              alt="Quality Standards"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Values Section with updated icons */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl text-[#ffcf7c] font-bold mb-12 text-center">قيمنا</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-[#ffcf7c] text-4xl mb-4 flex justify-center">
              <GiDiamondRing size={50} />
            </div>
            <h3 className="text-[#ffcf7c] text-xl font-semibold mb-3">الجودة العالية</h3>
            <p className="text-gray-300">نلتزم بتقديم أعلى معايير الجودة في كل قطعة</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-[#ffcf7c] text-4xl mb-4 flex justify-center">
              <RiCustomerService2Fill size={50} />
            </div>
            <h3 className="text-[#ffcf7c] text-xl font-semibold mb-3">خدمة العملاء</h3>
            <p className="text-gray-300">نقدم تجربة تسوق استثنائية وخدمة عملاء متميزة</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <div className="text-[#ffcf7c] text-4xl mb-4 flex justify-center">
              <GiStarsStack size={50} />
            </div>
            <h3 className="text-[#ffcf7c] text-xl font-semibold mb-3">الابتكار</h3>
            <p className="text-gray-300">نسعى دائماً لتقديم تصاميم عصرية ومبتكرة</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-[#ffcf7c] py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-black font-bold mb-6">كن على تواصل معنا</h2>
          <p className="text-black mb-8">اشترك في نشرتنا البريدية للحصول على آخر العروض والتحديثات</p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-[#ffcf7c] px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;