"use client";
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title hero__titlee'>
                Dr.Suriyas Ortho clinic offers healthy bones

            </h1>
            <h2 className='gradient-text font-bold mt-2 text-lg xl:text-xl'>
                #Movement is Medicine
            </h2>
            <h1 className='hero__title hero__titlee'>
               In orthopedics, every step is a step toward a better life
            </h1>
            <a href='contactme'>
              <CustomButton
                title="📞 Book an appointment"
                containerStyles="bg-primary-blue text-white rounded-full mt-10 shrink-expand-button"
                handleClick={handleScroll}

              />
            </a>  
              
          </div>
          <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src="/ortho.png" alt='hero'
                fill className='object-contain' />

            </div>

          </div>
       
        </div>
      
    
  )
}

export default Hero
