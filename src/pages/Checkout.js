import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import { isLoggedIn, saveUserData, getUserData } from '../utils/auth';

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    // Login/Register form
    email: '',
    password: '',
    // Personal Information
    fullName: '',
    phone: '',
    address: '',
    city: '',
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  useEffect(() => {
    const loggedIn = isLoggedIn();
    setIsUserLoggedIn(loggedIn);
    if (loggedIn) {
      // إذا كان المستخدم مسجل دخول، انتقل مباشرة إلى معلومات الشحن
      setStep(2);
      const userData = getUserData();
      setFormData(prev => ({
        ...prev,
        fullName: userData.fullName || '',
        email: userData.email || '',
        phone: userData.phone || '',
        address: userData.address || '',
        city: userData.city || ''
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    saveUserData({
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city
    });
    setIsUserLoggedIn(true);
    setStep(2);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Simulate registration
    saveUserData({
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city
    });
    setIsUserLoggedIn(true);
    setStep(2);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    // محاكاة إرسال الطلب
    localStorage.removeItem('cart');
    setShowSuccessMessage(true);
    setTimeout(() => {
      window.location.hash = '';
    }, 3000);
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-center items-center gap-4">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#ffcf7c] text-black' : 'bg-gray-600 text-white'}`}>1</div>
        <div className={`h-1 w-16 ${step >= 2 ? 'bg-[#ffcf7c]' : 'bg-gray-600'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#ffcf7c] text-black' : 'bg-gray-600 text-white'}`}>2</div>
        <div className={`h-1 w-16 ${step >= 3 ? 'bg-[#ffcf7c]' : 'bg-gray-600'}`}></div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-[#ffcf7c] text-black' : 'bg-gray-600 text-white'}`}>3</div>
      </div>
      <div className="flex justify-center gap-12 mt-2 text-sm text-gray-400">
        <span>تسجيل الدخول</span>
        <span>معلومات الشحن</span>
        <span>الدفع</span>
      </div>
    </div>
  );

  const renderAuthForm = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl text-[#ffcf7c] mb-6 text-right">تسجيل الدخول أو إنشاء حساب</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="البريد الإلكتروني"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="كلمة المرور"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <button type="submit" className="w-full bg-[#ffcf7c] text-black py-2 rounded-lg">
            تسجيل الدخول
          </button>
          <button 
            type="button" 
            onClick={handleRegister}
            className="w-full bg-gray-700 text-[#ffcf7c] py-2 rounded-lg"
          >
            إنشاء حساب جديد
          </button>
        </form>
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl text-[#ffcf7c] mb-6 text-right">معلومات الشحن</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="الاسم الكامل"
            value={formData.fullName}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="رقم الهاتف"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="العنوان"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="المدينة"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <button 
            type="button"
            onClick={() => setStep(3)}
            className="w-full bg-[#ffcf7c] text-black py-2 rounded-lg"
          >
            متابعة للدفع
          </button>
        </form>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div className="max-w-md mx-auto">
      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl text-[#ffcf7c] mb-6 text-right">معلومات الدفع</h2>
        <form onSubmit={handleSubmitOrder} className="space-y-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="رقم البطاقة"
            value={formData.cardNumber}
            onChange={handleInputChange}
            className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              value={formData.expiryDate}
              onChange={handleInputChange}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
              required
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleInputChange}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg text-right"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg"
          >
            تأكيد الطلب
          </button>
        </form>
      </div>
    </div>
  );

  const renderOrderConfirmation = () => (
    <div className="max-w-md mx-auto text-center">
      <div className="bg-gray-800 p-6 rounded-lg">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h2 className="text-xl text-[#ffcf7c] mb-4">تم تأكيد طلبك بنجاح!</h2>
        <p className="text-gray-300 mb-6">سيتم إرسال تفاصيل الطلب إلى بريدك الإلكتروني</p>
        <button 
          onClick={() => window.location.hash = ''}
          className="bg-[#ffcf7c] text-black px-6 py-2 rounded-lg"
        >
          العودة للرئيسية
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Header />
      <div className="py-16 bg-black min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-[#ffcf7c] text-center">إتمام الشراء</h1>
          
          {showSuccessMessage && (
            <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-md shadow-lg z-50">
              تمت عملية الشراء بنجاح! جاري تحويلك للصفحة الرئيسية...
            </div>
          )}

          {renderProgressBar()}
          
          {step === 1 && !isUserLoggedIn && renderAuthForm()}
          {step === 2 && renderShippingForm()}
          {step === 3 && renderPaymentForm()}
          {step === 4 && renderOrderConfirmation()}
        </div>
      </div>
    </>
  );
};

export default Checkout;