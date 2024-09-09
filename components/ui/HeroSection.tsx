import MyCarousel from "./MyCarousel"
import Socials from "./Socials"





const HeroSection = () => {


  return (
    <>
    <section className='px-2 md:px-20 py-3'>
    <div className="flex max-xl:flex-col gap-20">

      <div className='flex flex-col justify-center gap-6'>
        <div>
          <h1 className='font-bold text-2xl color-dark-100 '>Book your Next Trip with Kellyn Eco-Safaris</h1>
          <p className='pb-[10px] text-sm  italic w-full'>Experience personalized eco-friendly tours, wildlife safaris, and cultural explorations across Africa, designed to immerse you in nature.</p>

        </div>
        <button className="bg-[#ff7b24] hover:bg-[#f3b389] text-white font-bold py-2 px-4 sm:px-2 sm:py-1 rounded w-[110px] text-sm lg:w-[100px]">View Offers</button>

        <Socials />

      </div>

      <MyCarousel />



    </div>

    </section>
    </>
  )
}

export default HeroSection
