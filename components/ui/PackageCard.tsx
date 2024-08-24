// components/PackageCard.js
import React from 'react';

const PackageCard = ({ image, title, description, price }: PackageCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="bg-[#ff7b24] text-blue-600 text-xs font-semibold uppercase px-2 py-1 rounded-full mb-2 inline-block">Day Trip</span>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{description}</p>
        <div className="text-gray-800 font-bold">Start Price: {price}</div>
      </div>
    </div>
  );
};

export default PackageCard;
