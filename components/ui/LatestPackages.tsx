// components/LatestPackages.js
import React from 'react';
import PackageCard from './PackageCard';

const LatestPackages = () => {
  const packages = [
    {
      image: '/assets/img-9.jpg',
      title: 'Team Building',
      description: 'Team building exercises',
      price: 'Ksh 80,000',
    },
    {
      image: '/assets/img-10.jpg',
      title: 'Safari Drives Girls Tour',
      description: 'Go for a game drive with your friends',
      price: 'Ksh 8,999 per person',
    },
    {
      image: '/assets/img-11.jpg',
      title: 'Abai Lounge Tour',
      description: 'Private day trip that guarantees a fulfilling thrill',
      price: 'Ksh 2,000',
    },
    {
      image: '/assets/img-12.jpg',
      title: 'Jangwani Camping Tour',
      description: 'A camping experience like no other',
      price: 'Ksh 2,000',
    },
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Latest Packages</h2>
          <div className="space-x-4">
            <a href="/trips" className="text-blue-500 font-semibold hover:underline">All Trips</a>
            
          </div>
        </div>
        <div className="relative">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <PackageCard
                key={index}
                image={pkg.image}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestPackages;
