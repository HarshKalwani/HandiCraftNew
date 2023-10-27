"use client"
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from 'react-icons/fa6';
import Link from 'next/link';
import Hero from './Hero';
import logo from '../app/assets/logo.svg'
import Image from 'next/image';
import logo3 from "../app/assets/logo3.png"
import logo4 from "../app/assets/logo4.png"

const Header = () => {

    const [Open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen((prev) => !prev);
    }

    const toProducts = () => {
        const target = document.getElementById("Products");
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toFooter = () => {
        const target = document.getElementById("Footer");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div>
            <div className='flex w-full min-h-[5.5rem] justify-between items-center'>
                <div className='flex items-center justify-center '>
                        <Image
                            className='h-[4rem] w-[4rem] ml-4 mr-2'
                            priority
                            src={logo4}
                            alt="Follow us on Twitter"
                        />
                        <p className='text-[#000] font-serif text-[1.8rem] font-bold leading-normal'>Arihant Art Exports</p>
                </div>

                <div className=''>
                    <ul className='hidden gap-11 h-[1.5rem] text-[#000] text-[1rem] leading-normal font-semibold font-sans md:flex sm:hidden lg:flex mr-8'>
                        <li className='hover:underline'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='hover:underline' onClick={toProducts}>
                            Shop
                        </li>
                        <li className='hover:underline'>About</li>
                        <li className='hover:underline' onClick={toFooter}>Contact Us</li>
                    </ul>
                </div>

                <div className='mr-2 flex md:hidden '>
                    <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white'>
                        <span className='sr-only'></span>
                        {Open === true ? <FaTimes /> : <FaBarsStaggered />}
                    </button>
                </div>
            </div>
            {Open ? (
                <div className='md:hidden'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <ul className='text-[#000] px-3 py-2 rounded-md text-base mx-auto flex flex-col text-center text-[1rem] leading-normal font-semibold font-sans gap-4'>
                            <li className='hover:underline'><Link href="/">Home</Link></li>
                            <li className='hover:underline' onClick={toProducts}>Shop</li>
                            <li className='hover:underline'>About</li>
                            <li className='hover:underline' onClick={toFooter} >Contact Us</li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Header