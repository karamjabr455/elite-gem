import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import { FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(items);
  }, []);

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    const updatedCart = cartItems.map(item => 
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const applyPromoCode = () => {
    if (promoCode === 'ELITE10') {
      setDiscount(10);
    }
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.price);
      const quantity = item.quantity || 1;
      return total + (price * quantity);
    }, 0);
  };

  const getTax = () => getSubtotal() * 0.15; // 15% VAT
  const getDiscountAmount = () => getSubtotal() * (discount / 100);
  const getTotal = () => getSubtotal() + getTax() - getDiscountAmount();

  return (
    <>
      <Header />
      <div className="py-16 bg-black min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-[#ffcf7c] text-center">سلة التسوق</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center">
              <p className="text-[#ffcf7c] text-xl mb-4">السلة فارغة</p>
              <button 
                onClick={() => window.location.hash = 'products'}
                className="bg-[#ffcf7c] text-black px-6 py-2 rounded-lg hover:bg-[#e6b964]"
              >
                تصفح المنتجات
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row gap-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full md:w-48 h-48 object-cover rounded-md"
                      />
                      <div className="flex-grow text-right">
                        <h3 className="text-xl font-semibold text-[#ffcf7c] mb-2">{item.name}</h3>
                        <p className="text-gray-300 mb-2">{item.description}</p>
                        <div className="flex justify-end items-center gap-3 mb-4">
                          {item.oldPrice && (
                            <span className="text-gray-400 line-through">{item.oldPrice} ريال</span>
                          )}
                          <span className="text-[#ffcf7c] font-bold text-xl">{item.price} ريال</span>
                        </div>
                        
                        <div className="flex justify-end items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button 
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                              className="text-[#ffcf7c] hover:text-[#e6b964]"
                            >
                              <FiMinus />
                            </button>
                            <span className="text-white px-4">{item.quantity || 1}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              className="text-[#ffcf7c] hover:text-[#e6b964]"
                            >
                              <FiPlus />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <FiTrash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-800 p-6 rounded-lg h-fit">
                <h2 className="text-xl font-bold text-[#ffcf7c] mb-6 text-right">ملخص الطلب</h2>
                
                <div className="space-y-4 text-right">
                  <div className="flex justify-between text-gray-300">
                    <span>{getSubtotal()} ريال</span>
                    <span>المجموع الفرعي:</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>{getTax()} ريال</span>
                    <span>ضريبة القيمة المضافة (15%):</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-500">
                      <span>- {getDiscountAmount()} ريال</span>
                      <span>الخصم:</span>
                    </div>
                  )}
                  <div className="border-t border-gray-600 pt-4">
                    <div className="flex justify-between text-[#ffcf7c] font-bold text-xl">
                      <span>{getTotal()} ريال</span>
                      <span>الإجمالي:</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="كود الخصم"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="bg-[#ffcf7c] text-black px-4 py-2 rounded-lg hover:bg-[#e6b964]"
                      >
                        تطبيق
                      </button>
                    </div>
                    <button
                      onClick={() => window.location.hash = 'checkout'}
                      className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
                    >
                      إتمام الشراء
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;