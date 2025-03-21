import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-[#ffcf7c] text-lg font-semibold mb-4">التصنيفات</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`w-full text-right p-2 rounded ${
            !selectedCategory ? 'bg-[#ffcf7c] text-black' : 'text-white hover:bg-gray-700'
          }`}
        >
          جميع المنتجات
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`w-full text-right p-2 rounded ${
              selectedCategory === category.id ? 'bg-[#ffcf7c] text-black' : 'text-white hover:bg-gray-700'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;