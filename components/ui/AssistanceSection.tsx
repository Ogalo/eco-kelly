// components/AssistanceSection.js
import Image from 'next/image';
import React from 'react';
import EmailContact from '@/components/ui/EmailContact'

const AssistanceSection = () => {
  return (
    <section className="flex max-xl:flex-col gap-16">
      <div className="lg:w-1/2 ">
          <Image
            src='/assets/kellyn.png'
            alt='kelly main image'
            width={484}
            height={484}
            className='object-contain pt-[100px]'
          />

      </div>
      <div className='lg:w-1/2 w-full flex item-center justify-center p-4'>
      <EmailContact />
      </div>
    </section>
  );
};

export default AssistanceSection;
