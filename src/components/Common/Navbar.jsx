import React, { useState } from 'react'
import { Link, Links } from 'react-router-dom'
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from './Searchbar';
import CardDrawer from '../Layout/CardDrawer';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <nav className='container mx-auto flex items-center justify-between py-4 px-4'>
                <div>
                    <Link to="/" className='text-2xl font-medium'>
                        SKS
                    </Link>
                </div>
                <div className='hidden md:flex space-x-6'>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Men
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Women
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Top Wear
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Bottom Wear
                    </Link>

                </div>
                <div className='flex items-center space-x-4'>

                    <div className='overflow-hidden '>
                        <Searchbar />
                    </div>

                    <button onClick={toggleCartDrawer} className='relative hover:text-black cursor-pointer'>
                        <HiOutlineShoppingCart className='h-6 w-6 text-gray-700' />
                        <span className='absolute -top-3 bg-[#ea2e0e] text-white text-xs rounded-full px-2 py-0.5'>4</span>
                    </button>

                    <Link to="/profile" className='hover: text-black cursor-pointer'>
                        <HiOutlineUserCircle className='h-6 w-6 text-gray-700' />
                    </Link>

                    <button onClick={toggleNavDrawer} className='md:hidden cursor-pointer'>
                        <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                    </button>

                </div>
            </nav>

            <CardDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

            <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"} `}>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className='h-6 w-6  text-gray-600' />
                    </button>
                </div>
                <div className='p-4'>
                    <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                    <nav  className='space-y-4'>
                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-600 hover:text-black uppercase'
                        >
                            Men
                        </Link>

                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-600 hover:text-black uppercase'
                        >
                            Women
                        </Link>

                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-600 hover:text-black uppercase'
                        >
                            Top Wear
                        </Link>

                        <Link
                            to="#"
                            onClick={toggleNavDrawer}
                            className='block text-gray-600 hover:text-black uppercase'
                        >
                            bottom wear
                        </Link>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar