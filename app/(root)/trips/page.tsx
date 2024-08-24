import TripCard from '@/components/ui/TripCard'
import React from 'react'

const page = () => {
  return (
    <div className='mx-10'>
      <h5 className='my-6 font-semibold '>View all our upcoming events and trips</h5>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
      <TripCard
        img='/assets/Olkaria.jpg'
        title='Olkaria SPA Day Trip'
        description='Are you craving a day of relaxation and adventure?

        Join us for an exclusive day of relaxation and adventure at the stunning Olkaria Spa on September 28th.

        Enjoy breathtaking views at the Hells Gate National park and soak in the healing hot springs at The Olkaria Hot Spa.'
      />
      <TripCard
        img='/assets/Ndunda.png'
        title='Camp Ndunda'
        description='Experience the beauty of Ndunda Falls with Kellyn Eco Safaris on 11th May 2024! For Ksh. 3,500/- per person, this day trip includes transport, drinking water, professional photography, a safari medic, a nature trail walk, a natural pool, and a canopy walk. Immerse yourself in nature’s tranquility while enjoying thrilling activities. Just bring your ID/Passport, sunglasses, cap, and snacks, and you’re set for a memorable adventure. Secure your spot with a Ksh. 2,000/- deposit and prepare for an unforgettable day surrounded by lush landscapes and refreshing waterfalls!'
      />

     <TripCard
        img='/assets/Hike.png'
        title='Mt.Longonot Hike'
        description="Join Kellyn Eco Safaris for an exhilarating hike up Mt. Longonot on 13th April 2024! For just Ksh. 2,500/-, enjoy a full-day adventure with transport, entry fee, water, professional photography, a safari medic, a tour guide, and glucose included. Discover the breathtaking views of the Great Rift Valley while challenging yourself on this iconic volcanic trail. Whether you're a seasoned hiker or a nature lover, this hike offers an unforgettable experience. Don’t miss out—book your spot today and embark on an adventure filled with excitement and natural beauty!"
      />
      <TripCard
        img='/assets/Olkaria.jpg'
        title='Olkaria SPA Day Trip'
        description='Are you craving a day of relaxation and adventure?

        Join us for an exclusive day of relaxation and adventure at the stunning Olkaria Spa on September 28th.

        Enjoy breathtaking views at the Hells Gate National park and soak in the healing hot springs at The Olkaria Hot Spa.'
      />

      </div>

    </div>
  )
}

export default page
