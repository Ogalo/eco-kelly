// components/AssistanceSection.js
import Image from 'next/image';
import React from 'react';
import EmailContact from '@/components/ui/EmailContact'

const AssistanceSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-stretch my-5 gap-6">
      <div className="lg:w-1/2 w-full">
          <img
            src='/assets/kellyn.png'
            alt='kelly main image'
            width='350px'
            height='250px'
            className='w-full h-full object-cover'
          />

      </div>
      <div className='lg:w-1/2 w-full flex item-center justify-center p-4'>
      <EmailContact />
      </div>
    </section>
  );
};

export default AssistanceSection;
