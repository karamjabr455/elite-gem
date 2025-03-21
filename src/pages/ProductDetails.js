import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { FaRuler, FaPalette, FaIndustry } from 'react-icons/fa';

const ProductDetails = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-900 rounded-lg p-6">
          {/* Product Code Header */}
          <div className="bg-[#ffcf7c] text-black p-4 rounded-t-lg mb-6">
            <h2 className="text-xl font-bold">PRODUCT CODE: 11173102</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src="/path-to-main-image.jpg"
                  alt="Product Main"
                  className="w-full h-96 object-cover rounded-lg"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 text-2xl text-[#ffcf7c]"
                >
                  {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="/path-to-thumbnail1.jpg"
                  alt="Thumbnail 1"
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
                <img
                  src="/path-to-thumbnail2.jpg"
                  alt="Thumbnail 2"
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
                <img
                  src="/path-to-thumbnail3.jpg"
                  alt="Thumbnail 3"
                  className="w-full h-24 object-cover rounded-lg cursor-pointer"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-[#ffcf7c]">
                KRONOSTEP Z209 SPC FLOORING, 4 MM, LIGHT SHADE, BUTTERSCOTCH OAK, TRAFFIC CLASS AC4, 1280 X 192 MM
              </h1>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <FaRuler className="text-[#ffcf7c]" />
                  <span>PRODUCT TYPE: SPC FLOORING</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPalette className="text-[#ffcf7c]" />
                  <span>DECOR: BUTTERSCOTCH OAK</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaPalette className="text-[#ffcf7c]" />
                  <span>SHADE: LIGHT</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaIndustry className="text-[#ffcf7c]" />
                  <span>BRAND: KRONOSPAN</span>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-[#ffcf7c] mb-4">PRODUCT DESCRIPTION:</h3>
                <p className="text-gray-300 leading-relaxed">
                  KRONOSTEP Z209 SPC FLOORING IS A PRACTICAL AND DECORATIVE FLOORING ALTERNATIVE. THE MODEL INTEGRATES EASILY INTO ANY TYPE OF ARRANGEMENT AND OFFERS AN ELEGANT AND WELCOMING APPEARANCE.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  BEING MADE OF QUALITY SPC, WITH TRAFFIC CLASS 32 AND AC4 WEAR, IT IS A DURABLE AND RESISTANT CHOICE, BOTH FOR HOMES AND COMMERCIAL SPACES WITH MEDIUM TRAFFIC.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  THE TILES ARE 4 MM THICK AND 1280 X 192 MM IN SIZE, AND THEIR JOINING CREATES A DURABLE FLOOR THAT CAN SUPPORT HEAVY FURNITURE, WITHOUT BEING DAMAGED OR DISCOLORED.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="text-xl font-bold text-[#ffcf7c] mb-4">ADVANTAGES:</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• RESISTANCE TO LONG-TERM USE</li>
                  <li>• DOES NOT REQUIRE SCRAPING OR VARNISHING</li>
                  <li>• EASY TO MAINTAIN</li>
                  <li>• FAST ASSEMBLY</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;