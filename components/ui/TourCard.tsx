// components/TourCard.js
import React from 'react';

const TourCard = ({ image, title, time, price, slots, reviews }: TourCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-[250px]">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-500 text-xs font-semibold uppercase">Slots </span>
          {slots && (
            <span className="bg-[#ff7b24] text-black text-xs font-semibold px-2 py-1 rounded-full">
              {slots} TO GO
            </span>
          )}
        </div>
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
