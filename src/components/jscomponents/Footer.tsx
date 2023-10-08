import React from 'react'
import {FiMail} from 'react-icons/fi';
import {TbDeviceLandlinePhone} from 'react-icons/tb'


const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        
        <div className=' h-72  w-screen lg:flex md:flex md:flex-row sm:flex sm:flex-col lg:flex-row md:justify-between sm:justify-center items-center sm:items-center'>
        <span className='flex lg:ml-[15rem]   md:ml-[10rem] ml-[2.5rem]  mt-[3rem] items-center justify-center'>
          <div>
          </div>
          <div className='flex flex-col text-left text-white font-semibold w-[50rem]'>
            <h1 className='lg:text-4xl text-3xl'>Arihant Art Exports</h1>
            <h2 className='lg:text-3xl'>J-56 ,1st Phase, Sangaria Industries Area, Jodhpur(Raj.),State Code:08</h2>
          </div>
        </span>
        <span className='flex lg:mr-[26.5rem]  md:mr-[20rem] mr-[8rem] md:mt-[3rem] mt-[3rem] items-center justify-center'>
          <div>
          </div>
          <div className='flex flex-col text-left text-white font-semibold'>
            <h1 className='lg:text-4xl text-3xl'>Contact Us</h1>
            <h2 className='lg:text-3xl'>Arihantartexports@gmail.com</h2>
            <h2 className='lg:text-3xl'>+91 9079879306</h2>
          </div>
        </span>
      </div>
        <div className='h-[3rem] md:h-[2rem] bg-[#b88e2f] mt-3 flex justify-center text-[#fff3e3]'>
            <p>This Website is created By SUPER-BALLE agency. If you want to create your website mail us at superballe@gmail.com</p>
        </div>
    </div>
  )
}

export default Footer