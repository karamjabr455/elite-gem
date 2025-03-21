import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import productImage1 from "../img/منشور انستجرام انيق عن خواتم الزواج .png";
import productImage2 from "../img/White Minimalist Elegant Jewellery Instagram Post.png";
import productImage3 from "../img/Brown Beige Modern Elegant Jewelry Collection Instagram Post.png";
import productImage4 from "../img/Grey Simple Modern Jewelry Instagram Post.png";
import productImage5 from "../img/منشور انستقرام متجر مجوهرات.png";
import productImage6 from "../img/منشور أنستقرام مجوهرات أبيض و أسود بسيط.png";
import productImage7 from "../img/منشور إنستقرام بيج وذهبي مجوهرات.png";
import productImage8 from "../img/منشور إنستغرام Instagram أحمر  متجر مجوهرات الذهب والفضة بأسلوب مختلف.png";

const FeaturedProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const products = [
    { 
      id: 1, 
      name: "خواتم زواج انيقة", 
      image: productImage1, 
      price: "100 ريال",
      description: "خواتم زواج فاخرة مصنوعة من أجود أنواع الذهب، متوفرة بتصاميم عصرية تناسب جميع الأذواق"
    },
    { 
      id: 2, 
      name: "مجوهرات أنيقة باللون الأبيض البسيط", 
      image: productImage2, 
      price: "150 ريال",
      description: "مجموعة مميزة من المجوهرات البيضاء البسيطة، مثالية للمناسبات اليومية والرسمية"
    },
    { 
      id: 3, 
      name: "مجموعة مجوهرات عصرية أنيقة", 
      image: productImage3, 
      price: "200 ريال",
      description: "تشكيلة عصرية من المجوهرات تجمع بين الأناقة والتصميم المعاصر، مناسبة لجميع المناسبات"
    },
    { 
      id: 4, 
      name: "مجوهرات رمادية بسيطة وحديثة", 
      image: productImage4, 
      price: "200 ريال",
      description: "مجوهرات بتصميم رمادي أنيق، تجمع بين البساطة والحداثة لإطلالة مميزة"
    },
    { 
      id: 5, 
      name: "مجوهرات", 
      image: productImage5, 
      price: "200 ريال",
      description: "مجموعة متنوعة من المجوهرات الفاخرة، مصممة لتناسب مختلف الأذواق والمناسبات"
    },
    { 
      id: 6, 
      name: "مجوهرات أبيض و أسود بسيط", 
      image: productImage6, 
      price: "200 ريال",
      description: "تشكيلة فريدة تجمع بين الأبيض والأسود، مثالية للإطلالات الكلاسيكية والعصرية"
    },
    { 
      id: 7, 
      name: "مجموعة الؤلؤة", 
      image: productImage7, 
      price: "200 ريال",
      description: "مجموعة راقية من مجوهرات اللؤلؤ، تضيف لمسة من الأناقة والفخامة لإطلالتك"
    },
    { 
      id: 8, 
      name: "مجوهرات الذهب والفضة بأسلوب مختلف", 
      image: productImage8, 
      price: "200 ريال",
      description: "مزيج فريد من الذهب والفضة بتصاميم مبتكرة، تجمع بين الأصالة والحداثة"
    }
  ];

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <section className="py-16 bg-black text-[#ffcf7c]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">أحدث المجموعات المميزة</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg"
              data-aos="fade-up"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-lg text-[#ffcf7c] mt-2">{product.price}</p>
              <button
                onClick={() => openProductDetails(product)}
                className="mt-4 bg-[#ffcf7c] text-black px-4 py-2 rounded-md hover:bg-[#e6b964] transition-colors"
              >
                التفاصيل
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
                <button
                  onClick={closeModal}
                  className="text-[#ffcf7c] hover:text-[#e6b964]"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <div className="text-right">
                  <p className="text-xl mb-4">السعر: {selectedProduct.price}</p>
                  <p className="text-gray-300 mb-4">
                    {selectedProduct.description}
                  </p>
                  <button
                    onClick={() => addToCart(selectedProduct)}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors w-full"
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
          <div className="fixed bottom-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg">
            تم إضافة المنتج إلى السلة بنجاح
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProducts;