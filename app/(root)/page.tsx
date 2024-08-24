import React from 'react'

import Header from '@/components/ui/Header'
import RecommendedTours from '@/components/ui/RecommendedTours'
import AssistanceSection from '@/components/ui/AssistanceSection'
import LatestPackages from '@/components/ui/LatestPackages'
import Footer from '@/components/ui/Footer'
import HeroSection from '@/components/ui/HeroSection'
import Rights from '@/components/ui/Rights'








const Home = async () => {

  return (
    <main className='home-container'>
      <Header />

      <HeroSection />
      <RecommendedTours />
      <AssistanceSection />
      <LatestPackages />
      <Footer />
      <Rights />
    </main>

  )
}

export default Home
