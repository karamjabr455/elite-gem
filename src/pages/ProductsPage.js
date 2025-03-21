import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import CategoryFilter from '../components/ProductFilters/CategoryFilter';
import PriceFilter from '../components/ProductFilters/PriceFilter';
import SearchBar from '../components/ProductFilters/SearchBar';
import productsData from '../products.json';
import Footer from '../components/Footer';

// Import product images
import productImage1 from "../img/products/_A dazzling diamond tennis bracelet made of 18K yellow gold, featuring a continuous row of high-quality round-cut diamonds. The bracelet is displayed elegantly on a reflective glass surface, with soft yet focused li.jpg";
import productImage2 from "../img/products/_A glamorous halo engagement ring with a large, round-cut diamond encircled by a sparkling halo of smaller diamonds. The band is made of rose gold and encrusted with additional diamonds, adding extra brilliance. The.jpg";
import productImage3 from "../img/products/_A stunning three-stone engagement ring symbolizing past, present, and future love. The ring features a trio of brilliant-cut diamonds set on a yellow gold band, with intricate engravings along the sides. The settin.jpg";
import productImage4 from "../img/products/_A luxurious pearl bracelet featuring natural white pearls connected by delicate 18K white gold links. The bracelet is elegantly displayed on a soft velvet cushion with diffused lighting, creating a refined and  (1).jpg";
import productImage5 from "../img/products/_A dazzling diamond tennis bracelet made of 18K yellow gold, featuring a continuous row of high-quality round-cut diamonds. The bracelet is displayed elegantly on a reflective glass surface, with soft yet focused li.jpg";
import productImage6 from "../img/products/_A sophisticated and modern diamond necklace featuring a delicate design with high-quality natural diamonds set in an 18K white gold frame. The necklace showcases a contemporary yet timeless aesthetic, with intricat.jpg";
import productImage7 from "../img/products/_A luxurious royal pearl necklace featuring perfectly round natural pearls, elegantly strung together with intricate 18K gold and diamond accents. The pearls have a radiant luster, reflecting elegance and sophistica.jpg";
import productImage8 from "../img/products/_A pair of luxurious dangling diamond earrings, elegantly crafted from 18K gold and adorned with brilliant-cut natural diamonds. The design features a modern yet timeless aesthetic, with diamonds cascading gracefull.jpg";
import productImage9 from "../img/products/_A pair of elegant classic pearl earrings, featuring perfectly round natural pearls set in 18K gold. The design embodies timeless sophistication, with a smooth and lustrous pearl delicately mounted on a refined gold.jpg";
import productImage10 from "../img/products/_A luxurious royal wedding set, featuring a complete collection of a necklace, earrings, and a ring, all crafted from 18K white gold and adorned with pure, high-quality natural diamonds. The design of each piece is .jpg";

const productImages = {
  1: productImage1,
  2: productImage2,
  3: productImage3,
  4: productImage4,
  5: productImage5,
  6: productImage6,
  7: productImage7,
  8: productImage8,
  9: productImage9,
  10: productImage10
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData.products);
  // Add new state for modal
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // Add new functions for modal handling
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
    const productWithImage = {
      ...product,
      image: productImages[product.id] // تخزين مسار الصورة مباشرة
    };
    cart.push(productWithImage);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  useEffect(() => {
    let filtered = productsData.products;

    // تطبيق فلتر التصنيف
    if (selectedCategory) {
      filtered = filtered.filter(product => product.categoryId === selectedCategory);
    }

    // تطبيق فلتر السعر
    filtered = filtered.filter(product => 
      product.price >= priceRange.min && product.price <= priceRange.max
    );

    // تطبيق فلتر البحث
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, searchQuery]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="space-y-6">
            <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <CategoryFilter
              categories={productsData.categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <PriceFilter priceRange={priceRange} onPriceChange={setPriceRange} />
          </div>

          {/* Products Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img
                    src={productImages[product.id]}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[#ffcf7c] text-xl font-semibold">{product.name}</h3>
                    <p className="text-gray-300 mt-2">{product.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-[#ffcf7c] text-lg">{product.price} ريال</span>
                      <button 
                        onClick={() => openProductDetails(product)}
                        className="bg-[#ffcf7c] text-black px-4 py-2 rounded hover:bg-[#e6b964]"
                      >
                        عرض التفاصيل
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#ffcf7c]">{selectedProduct.name}</h2>
              <button
                onClick={closeModal}
                className="text-[#ffcf7c] hover:text-[#e6b964]"
              >
                ✕
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={productImages[selectedProduct.id]}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="text-right">
                <div className="mb-4">
                  <p className="text-xl text-[#ffcf7c]">السعر: {selectedProduct.price} ريال</p>
                  {selectedProduct.oldPrice && (
                    <p className="text-gray-400 line-through">
                      السعر القديم: {selectedProduct.oldPrice} ريال
                    </p>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{selectedProduct.description}</p>
                <p className="text-gray-400 text-sm mb-4">{selectedProduct.details}</p>
                <button
                  onClick={() => addToCart(selectedProduct)}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
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

      <Footer />
    </div>
  );
};

export default ProductsPage;