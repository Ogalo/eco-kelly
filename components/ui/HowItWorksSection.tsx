// components/HowItWorksSection.js
import React from 'react';

const steps = [
  {
    icon: '/icons/facebook.png', // Replace with actual icon path
    title: 'SEARCH',
    description: 'Find Your Dream Trip',
  },
  {
    icon: '/icons/instagram.png', // Replace with actual icon path
    title: 'SELECT',
    description: 'Select Trip Package',
  },
  {
    icon: '/icons/twitter.png', // Replace with actual icon path
    title: 'BOOK',
    description: 'Booking and pay',
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          How it works?
        </h2>
        <p className="text-center text-blue-500 mb-8">
          SEARCH · SELECT · BOOK
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center flex flex-col items-center"
            >
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-full shadow-md mb-4">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
