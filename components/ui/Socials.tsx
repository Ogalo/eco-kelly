import Image from 'next/image'
import React from 'react'

const Socials = () => {
  return (
    <div className=''>

      <div className='flex gap-2 mt-3'>
      <Image src='/icons/facebook.svg' alt='envelope' height={24} width={24}/>
      <Image src='/icons/instagram.svg' alt='envelope' height={24} width={24}/>
      <Image src='/icons/tripadvisor.svg' alt='envelope' height={24} width={24}/>

      </div>
    </div>
  )
}

export default Socials
