import React from 'react'
import { TbBrandMeta } from 'react-icons/tb'
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'>
        <div className='container max-auto flex justify-between items-center py-3 px-3'>
            <div className='hidden md:flex items-center space-x-4 pl-2'>
                <a href="#" className='hover: text-gray-300'>
                    <TbBrandMeta className='h-5 w-5' />
                </a>
                <a href="#" className='hover: text-gray-300'>
                    <FaFacebookF className='h-5 w-5' />
                </a>
                <a href="#" className='hover: text-gray-300'>
                    <CiInstagram className='h-5 w-5' />
                </a>
                <a href="#" className='hover: text-gray-300'>
                    <FaTwitter className='h-5 w-5' />
                </a>
            </div>
            <div className='text-sm text-center flex-grow'>
               <span>We ship worldwide - Fast and reliable shipping!</span>
            </div>
            <div className='text-sm hidden md:block'>
                <a href="phone:+880 19091-25813" className='hover: text-gray-300'>
                    +880 19091-25813
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar