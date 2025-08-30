/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import heroimg1 from '../../assets/rabbit-hero.webp'
import heroimg2 from '../../assets/mens-collection.webp'
import heroimg3 from '../../assets/womens-collection.webp';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const img = [heroimg1, heroimg2, heroimg3];

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: 'easeInOut' }
    },
    exit: (direction) => ({
        zIndex: 0,
        x: direction > 0 ? -1000 : 1000,
        opacity: 0,
        transition: { duration: 1, ease: 'easeInOut' }
    })
}

const Hero = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % img.length);
    };

    // const handlePrev = () => {
    //     setDirection(-1);
    //     setIndex((prev) => (prev - 1 + img.length) % img.length);
    // }; 

    return (
        <section
            className='relative group w-full h-[400px] md:h-[600px] lg:h-[750px] overflow-hidden'
        >
            <AnimatePresence custom={direction}>
                <motion.img
                    key={index}
                    src={img[index]}
                    alt='hero img'
                    custom={direction}
                    initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    variants={variants}
                    className='absolute inset-0 w-full h-full object-cover'
                />
            </AnimatePresence>

            <div
                className='absolute inset-0 bg-black/40 flex items-center justify-center'>
                <div
                    className='text-center text-white px-4 md:px-8'>
                    <h1
                        className='text-4xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter uppercase drop-shadow-lg leading-tight mb-6'>
                        Vacation <br />  Ready
                    </h1>
                    <p
                        className='text-base md:text-xl lg:text-2xl font-light tracking-wide opacity-90 mb-8'
                    >
                        Explore our vacation-ready outfits with dast worldwide shipping
                    </p>
                    <button
                        className='px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all duration-300'
                    >
                        Shop now
                    </button>
                </div>
            </div>

            <div
                className='absolute bottom-6 left-0 right-0 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500'
            >
                {
                    img.map((_, i) => {
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > index ? 1 : -1);
                                setIndex(i);
                            }}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-white scale-125" : "bg-white/50"}`}
                        />

                    })
                }
            </div>

            {/* <button
                onClick={handlePrev}
                className='absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <FaChevronLeft className='h-6 w-6 ' />
            </button>

            <button
                onClick={handleNext}
                className='absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                <FaChevronRight className='h-6 w-6' />
            </button> */}



        </section>
    )
}

export default Hero