import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import offerImage1 from "../img/منشور انستجرام انيق عن خواتم الزواج .png";
import offerImage2 from "../img/White Minimalist Elegant Jewellery Instagram Post.png";
import offerImage3 from "../img/Brown Beige Modern Elegant Jewelry Collection Instagram Post.png";
import offerImage4 from "../img/Grey Simple Modern Jewelry Instagram Post.png";

const SpecialOffers = () => {
    const [selectedOffer, setSelectedOffer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const offers = [
    {
      id: 1,
      title: "خصم 30%",
      description: "على جميع الخواتم الذهبية",
      price: "700$",
      originalPrice: "1000$",
      details: "خواتم ذهبية فاخرة عيار 18 قيراط، متوفرة بتصاميم عصرية ومميزة. يشمل العرض جميع موديلات الخواتم في المعرض. العرض ساري حتى نهاية الشهر.",
      image: offerImage1,
    },
    {
      id: 2,
      title: "عرض خاص",
      description: "اشتري قطعتين واحصل على الثالثة مجاناً",
      price: "1500$",
      originalPrice: "2250$",
      details: "عرض حصري على مجموعة المجوهرات الفضية. اختر أي قطعتين من المجموعة واحصل على الثالثة مجاناً. يشمل العرض الأساور والخواتم والقلائد.",
      image: offerImage2,
    },
    {
      id: 3,
      title: "تخفيض حصري",
      description: "خصم 20% على مجموعة اللؤلؤ",
      price: "2400$",
      originalPrice: "3000$",
      details: "مجموعة فاخرة من اللؤلؤ الطبيعي، تشمل قلادات وأساور وأقراط. جميع القطع مصنوعة يدوياً ومرصعة باللؤلؤ الأصلي.",
      image: offerImage3,
    },
    {
      id: 4,
      title: "عرض محدود",
      description: "خصم 25% على الأساور الفضية",
      price: "375 $",
      originalPrice: "500 $",
      details: "أساور فضية عيار 925، متوفرة بتصاميم كلاسيكية وعصرية. مناسبة لجميع المناسبات. العرض لفترة محدودة فقط.",
      image: offerImage4,
    }
  ];
  const openOfferDetails = (offer) => {
    setSelectedOffer(offer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOffer(null);
  };

  const addToCart = (offer) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(offer);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <section className="py-16 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#ffcf7c] text-center">العروض والتخفيضات</h2>
        <Slider {...settings}>
          {offers.map((offer) => (
            <div key={offer.id} className="px-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <img 
                  src={offer.image} 
                  alt={offer.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100">
                  <h3 className="text-2xl font-bold text-[#ffcf7c] mb-2">{offer.title}</h3>
                  <p className="text-white text-lg px-4 text-center mb-4">{offer.description}</p>
                  <button
                    onClick={() => openOfferDetails(offer)}
                    className="bg-[#ffcf7c] text-black px-6 py-2 rounded-md hover:bg-[#e6b964] transition-colors"
                  >
                    التفاصيل
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Modal */}
        {isModalOpen && selectedOffer && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#ffcf7c]">{selectedOffer.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-[#ffcf7c] hover:text-[#e6b964]"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedOffer.image}
                  alt={selectedOffer.title}
                  className="w-full h-64 object-cover rounded-md"
                />
                <div className="text-right">
                  <div className="mb-4">
                    <p className="text-[#ffcf7c] text-xl mb-2">{selectedOffer.description}</p>
                    <div className="flex justify-end items-center gap-3 mb-2">
                      <span className="text-gray-400 line-through text-lg">{selectedOffer.originalPrice}</span>
                      <span className="text-[#ffcf7c] font-bold text-2xl">{selectedOffer.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{selectedOffer.details}</p>
                  </div>
                  <button
                    onClick={() => {
                      addToCart(selectedOffer);
                      closeModal();
                    }} 
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full text-lg font-semibold"
                  >
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Success Message */}
        {showMessage && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50">
            تم إضافة المنتج إلى السلة بنجاح
          </div>
        )}
      </div>
    </section>
  );
};

export default SpecialOffers;