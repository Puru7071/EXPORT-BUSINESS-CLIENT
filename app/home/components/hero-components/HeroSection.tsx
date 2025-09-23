import React from 'react'
import Image from 'next/image';
import Writer from "../../../components/Writer";
import Achievement from './Achievement';
import Header from './Header';
import { SEOAchievement, SEOTypeWriter } from './SEOComponents';
import Contact from './Contact';
import { TypeWriterTexts } from '@/app/utils';
import ThumbImage from '@/app/components/ThumbImage';

const HeroSection = () => {
  return (
    <div className='hero-frame w-[100%] h-[100vh] relative overflow-x-hidden'>
      <ThumbImage
        main='/assets/hero.webp' 
        alt='Bhargava Enterprises team working on business solutions'
        className='w-full h-full object-cover'
        thumbnail='/assets/hero-thumbnail.webp'
      />
      <div
        className='h-full w-full absolute top-0 left-0 bg-black/70 flex flex-col justify-around items-start gap-0 lg:px-32 md:px-24'
      >
        <Header />

        <div className='h-auto w-full flex flex-col justify-start gap-5'>
          <div className='flex flex-col text-white relative'>
            <span className='text-5xl font-[600] relative -left-1 mb-2'>Welcome to Bhargav Trading Co.</span>
            <Writer words={TypeWriterTexts} />
            <SEOTypeWriter/>
          </div>

          <Achievement />
          <SEOAchievement/>

          
        </div>
<Contact/>
        
      </div>
    </div>
  )
}

export default HeroSection