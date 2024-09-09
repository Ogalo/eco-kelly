// components/TourCard.js
import React from 'react';

const TourCard = ({ image, title, time, price, slots, reviews }: TourCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[250px]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="text-gray-500 text-sm">
          <p>{time}</p>
          <p className="mt-1">Start Price: <span className="text-black font-bold">{price}</span></p>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-yellow-400 mr-1">⭐</span>
          <span className="text-gray-600 text-sm">{reviews} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
