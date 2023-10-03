import React from 'react'


const HeroMain = () => {
    return (
       
            <div className='mainLeadHero w-screen md:h-[62.99563rem] sm:h-96  md:flex md:justify-end sm:flex sm:justify-center  sm:items-center bg-cover'>
                <div className='flex justify-center items-center md:ml-0  w-full md:w-[40rem] h-[28rem] sm:h[25rem]rounded-md bg-[#FFF3E3] mr-32  mt-5'>
                    <div className=' md:mt-[5.81rem] md:ml-[2.56rem] text-start ml-6'>
                        <p className='md:w-[7.6rem] md:h-[1.5rem] text-black  md:text-[0.975rem] font-bold  '>New Arrival</p>
                        <p className='md:w-[34rem] md:h-[7.93rem]  text-black text-2xl md:text-[3.25rem] font-bold  md:leading-[4.0625rem] mt-2 '>Discover Our New Collection</p>
                        <p className='md:w-[34rem] md:h-[3.29rem]  text-black font-semibold leading-[1.5rem]'>Handcrafted Furniture: <span></span> Where Artistry Meets Functionality, Your Space Elevated</p>
                        <p className='py-[1rem] px-[2rem] inline-flex items-start gap-[0.625rem] bg-black text-white mt-6 cursor-pointer rounded-md'>BUY NOW</p>
                    </div>
                </div>
            </div>
       
    )
}

export default HeroMain