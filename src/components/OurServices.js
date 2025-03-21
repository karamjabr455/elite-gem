import React from 'react';
import { FaGem, FaCertificate, FaTruck, FaHandshake } from 'react-icons/fa';

const OurServices = () => {
  const services = [
    {
      icon: <FaGem className="text-5xl mb-4 text-[#ffcf7c]" />,
      title: "مجوهرات حصرية",
      description: "تشكيلة فريدة من المجوهرات المصممة بأعلى معايير الجودة والفخامة"
    },
    {
      icon: <FaCertificate className="text-5xl mb-4 text-[#ffcf7c]" />,
      title: "شهادة ضمان",
      description: "جميع مجوهراتنا مرفقة بشهادة ضمان تؤكد جودتها وأصالتها"
    },
    {
      icon: <FaTruck className="text-5xl mb-4 text-[#ffcf7c]" />,
      title: "توصيل آمن",
      description: "خدمة توصيل سريعة وآمنة مع تغليف فاخر يليق بقيمة مشترياتك"
    },
    {
      icon: <FaHandshake className="text-5xl mb-4 text-[#ffcf7c]" />,
      title: "خدمة عملاء متميزة",
      description: "فريق متخصص لتقديم المشورة والمساعدة على مدار الساعة"
    }
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#ffcf7c] text-center mb-12">خدماتنا المميزة</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-black p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
            >
              {service.icon}
              <h3 className="text-xl font-bold text-[#ffcf7c] mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;