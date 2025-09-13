import React from 'react'
import { images } from '@/app/utils/index';
import TypeWriter from "./TypeWriter";
import Achievement from './Achievement';
import Header from './Header';
import { SEOAchievement, SEOTypeWriter } from './SEOComponents';

const HeroSection = () => {
  return (
    <div className='hero-frame w-[100vw] h-[95vh] relative'>
      <img
        src={images.hero}
        alt="Bhargava Enterprises team working on business solutions"
        className="h-full w-full object-cover"
      />
      <div
        className='h-full w-[100%] absolute top-0 left-0 bg-black/70 flex flex-col justify-around items-start gap-3 px-32'
      >
        <Header />

        <div className='h-120 flex flex-col justify-start gap-5 '>
          <div className='flex flex-col text-white relative'>
            <span className='text-5xl font-[600] relative -left-2 mb-2'>Welcome to Bhargava Enterprises</span>
            <TypeWriter />
            <SEOTypeWriter/>
          </div>

          <Achievement />
          <SEOAchievement/>
        </div>

      </div>
    </div>
  )
}

export default HeroSection