import Image from 'next/image';
import React from 'react'

const page = () => {

  const images = [
    '/assets/img-1.jpg',
    '/assets/img-2.jpg',
    '/assets/img-3.jpg',
    '/assets/img-4.jpg',
    '/assets/img-5.jpg',
    '/assets/img-6.jpg',
    '/assets/img-7.jpg',
    '/assets/img-8.jpg',
    '/assets/img-9.jpg',
    '/assets/img-10.jpg',
    '/assets/img-11.jpg',
    '/assets/img-12.jpg',
    '/assets/img-13.jpg',
    '/assets/img-15.jpg',

    // Add paths for all your images here
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-center text-3xl font-bold mb-8">
        Event Gallery
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {images.map((src, index) => (
        <div key={index} className="relative w-full h-64">
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      ))}
    </div>

    </div>
  )
}

export default page
