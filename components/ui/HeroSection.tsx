import SearchBar from "./SearchBar"
import Socials from "./Socials"





const HeroSection = () => {


  return (
    <div className="hero flex-wrap md:flex-col justify-between items-center lg:px-10 mt-[-25px] px-1">

      <div className='flex flex-col lg:gap-4 gap-0.5 pt-[150px] justify-center'>
        <h1 className='font-bold md:text-3xl color-dark-100'>Book your Next Trip with Eco-Safaris</h1>
        <p className='pb-[10px] text-sm'>We offer only the best & excellent services</p>
        <button className="bg-[#ff7b24] hover:bg-[#f3b389] text-white font-bold py-2 px-4 sm:px-2 sm:py-1 rounded w-[110px] text-sm lg:w-[100px]">View Offers</button>

        <Socials />

      </div>

      <SearchBar />

    </div>
  )
}

export default HeroSection
