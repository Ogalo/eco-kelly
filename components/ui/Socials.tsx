import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Socials = () => {
  return (
    <div className=''>

      <div className='flex gap-2 mt-3'>
      <Link href="https://www.facebook.com/profile.php?id=100093678202215&mibextid=ZbWKwL"><Image src='/icons/facebook.svg' alt='envelope' height={24} width={24}/></Link>
      <Link href="https://www.instagram.com/kellyn.eco.safaris?igsh=YzljYTk1ODg3Zg=="><Image src='/icons/instagram.svg' alt='envelope' height={24} width={24}/></Link>
      <Link href="#"><Image src='/icons/tripadvisor.svg' alt='envelope' height={24} width={24}/></Link>




      </div>
    </div>
  )
}

export default Socials
