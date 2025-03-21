import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* معلومات الاتصال */}
          <div className="text-center md:text-right">
            <h3 className="text-[#ffcf7c] text-xl font-bold mb-4">تواصل معنا</h3>
            <p className="mb-2">الهاتف: 0996369002</p>
            <p className="mb-2">البريد الإلكتروني: abua33012@gmail.com</p>
            <p>العنوان: الجمهورية العربية السورية/ دمشق</p>
          </div>

          {/* روابط مهمة */}
          <div className="text-center">
            <h3 className="text-[#ffcf7c] text-xl font-bold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ffcf7c] transition-colors">من نحن</a></li>
              <li><a href="#" className="hover:text-[#ffcf7c] transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-[#ffcf7c] transition-colors">الشروط والأحكام</a></li>
              <li><a href="#" className="hover:text-[#ffcf7c] transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          {/* وسائل التواصل الاجتماعي */}
          <div className="text-center md:text-left">
            <h3 className="text-[#ffcf7c] text-xl font-bold mb-4">تابعنا على</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-[#ffcf7c] transition-colors text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-[#ffcf7c] transition-colors text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#ffcf7c] transition-colors text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-[#ffcf7c] transition-colors text-2xl">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* حقوق النشر */}
        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} Elite Gem
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;