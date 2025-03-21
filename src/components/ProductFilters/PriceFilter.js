import React from 'react';

const PriceFilter = ({ priceRange, onPriceChange }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h3 className="text-[#ffcf7c] text-lg font-semibold mb-4">نطاق السعر</h3>
      <div className="space-y-4">
        <div>
          <label className="text-white block mb-2">السعر الأدنى</label>
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange.min}
            onChange={(e) => onPriceChange({ ...priceRange, min: parseInt(e.target.value) })}
            className="w-full"
          />
          <span className="text-white">{priceRange.min} ريال</span>
        </div>
        <div>
          <label className="text-white block mb-2">السعر الأعلى</label>
          <input
            type="range"
            min="0"
            max="10000"
            value={priceRange.max}
            onChange={(e) => onPriceChange({ ...priceRange, max: parseInt(e.target.value) })}
            className="w-full"
          />
          <span className="text-white">{priceRange.max} ريال</span>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;