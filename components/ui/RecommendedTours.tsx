// components/RecommendedTours.js
import React from 'react';
import TourCard from './TourCard';

const RecommendedTours = () => {
  const tours = [
    {
      image: '/assets/img-1.jpg',
      title: 'Wasini Island Tour',
      time: 'Nov, 16th, 2024',
      price: 'Ksh 18,000',
      slots: '5',
      reviews: '32',
    },
    {
      image: '/assets/img-2.jpg',
      title: 'Mombasa Tour',
      time: 'Sep, 9th, 2024',
      price: 'Ksh 15,000',
      slots: '10',
      reviews: '18',
    },
    {
      image: '/assets/img-3.jpg',
      title: 'Olkaria SPA Tour',
      time: 'Sep, 28th, 2024',
      price: 'Ksh 3,500',
      slots: '7',
      reviews: '15',
    },
    {
      image: '/assets/img-4.jpg',
      title: 'Ndunda Falls Tour',
      time: 'Oct, 15th, 2024',
      price: 'Ksh 3,500',
      slots: '2',
      reviews: '20',
    },
    {
      image: '/assets/img-5.jpg',
      title: 'Mt. Longonot Hike',
      time: 'Apr, 13th, 2024',
      price: 'Ksh 2,500',
      slots: '5',
      reviews: '25',
    },

  ];

  return (
    <section className="py-5 px-15 mt-1">
      <div className="container">
        <div className="flex-wrap justify-between items-center mb-8">
          <h2 className="text-1xl lg:text-2xl font-bold">Recommended Tours</h2>
          <a href="#" className="text-[#ff7b24] hover:underline lg:text-sm text-xs">See all tours & activities</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {tours.map((tour, index) => (
            <TourCard
              key={index}
              image={tour.image}
              title={tour.title}
              time={tour.time}
              price={tour.price}
              slots={tour.slots}
              reviews={tour.reviews}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedTours;
