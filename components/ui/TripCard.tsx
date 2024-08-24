import React from 'react'

const TripCard = ({img, title, description}: TripCardProps) => {
  return (
    <div className='w-full lg:w-[250px] shadow-sm'>
      <img src={img} alt={title} width='250px' />
      <h1 className='my-1 font-bold'>{title}</h1>
      <p className='my-1 w-[250px] text-sm'>{description}</p>

    </div>
  )
}

export default TripCard
