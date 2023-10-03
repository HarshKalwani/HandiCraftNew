import React from 'react'
import { FiSearch } from 'react-icons/fi'


const Navbar = () => {
    return (
        <div>
            <div className='flex w-11/12 h-[5.5rem] justify-between items-center'>
                <div className='flex items-center'>
                    <img src="../logo-no-background.svg" alt='' className='h-[4rem]'></img>
                    <p className='text-[#000] font-sans text-[1.8rem] font-bold leading-normal'>Arihant Art Exports</p>
                </div>

                <div className=''>
                    <ul className='flex gap-11 h-[1.5rem] text-[#000] text-[1rem] leading-normal font-semibold font-sans shrink-0'>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className='w-[1.75rem] h-[1.75rem] shrink-0'>
                    <FiSearch />
                </div>
            </div>
        </div>
    )
}

export default Navbar