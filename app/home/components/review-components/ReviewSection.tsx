"use client"
import React, { useEffect, useState } from 'react'
import { reviews } from '@/app/utils'
import LazyImage from '@/app/components/LazyImage'
import { TiStarFullOutline } from "react-icons/ti";
import SectionHeading from '@/app/components/SectionHeading';

export interface Review {
    id: string;
    author: string;
    language: string;
    rating: number;
    review: string;
    translation: string;
    url: string;
    sign: string
}


const Card = ({ data, position }: { data: Review, position: string }) => {
    const baseClasses = "h-56  rounded-xl bg-white flex-shrink-0 p-5 flex flex-col gap-3 absolute top-0";
    const variableClasses = ((): string | null => {
        if (position === "center") {
            return "w-[34%] scale-105 left-1/2 -translate-x-1/2 z-2 shadow-2xl"
        }
        else if (position === "left") {
            return "w-[31%] scale-75 left-[4.5%] z-1 shadow-xl"
        }
        else if (position === "right") {
            return "w-[31%] scale-75 right-[4.5%] z-1 shadow-xl"
        }
        return null;
    })();

    return (<div key={data.id} className={`${baseClasses} ${variableClasses}`}>
        <div className='flex flex-row items-center gap-4'>
            <LazyImage
                src={data.url}
                alt={data.author}
                classes='h-12 w-12 rounded-full'
            />
            <div>
                <div className=' capitalize font-bold tracking-widest'>{data.author}</div>
                <div className='flex flex-row relative -left-0.5'>
                    {Array.from({ length: data.rating }).map((_, i) => (
                        <div key={i} className="w-4 h-4 text-amber-400 rounded">
                            <TiStarFullOutline />
                        </div>
                    ))}
                    {Array.from({ length: 5 - data.rating }).map((_, i) => (
                        <div key={i} className="w-4 h-4 text-gray-400 rounded">
                            <TiStarFullOutline />
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className='text-justify'>
            {data.review}
        </div>
        <div className='w-24 h-12 absolute bottom-1 right-10'>
            <LazyImage
                src={data.sign || ""}
                alt={data.author}
                classes='h-full w-full'
                direct
            />
        </div>
    </div>)
}

const ReviewSection = () => {
    const [prevIndex, setPrevIndex] = useState(0);
    const [curIndex, setCurIndex] = useState(1);
    const [nextIndex, setNextIndex] = useState(2);
    const length = reviews.length || 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurIndex((prev) => {
                const newCur = (prev + 1) % length;
                const newPrev = (newCur === 0) ? length - 1 : newCur - 1;
                const newNext = (newCur + 1 === length) ? 0 : newCur + 1;

                setPrevIndex(newPrev);
                setNextIndex(newNext);
                return newCur;
            });

        }, 5000)

        return () => clearInterval(interval);
    }, [length]);
    return (
        <div
            className='w-full h-auto pb-10 bg-white'
            style={{
                backgroundImage: `linear-gradient(rgba(254, 250, 224, 0.6), rgba(254, 250, 224, 0.6)), url('/review-bg.webp')`,
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <SectionHeading heading="HEAR FROM OUR CUSTOMERS" className='px-20 pt-10 mb-2' />
            <div className='w-full flex h-56 flex-row justify-center text-gray-500 tracking-wide flex-nowrap gap-0 pt-0 pb-10 relative mb-10'>
                <Card data={reviews[prevIndex]} position='left' />
                <Card data={reviews[curIndex]} position='center' />
                <Card data={reviews[nextIndex]} position='right' />
            </div>
        </div>
    )
}

export default ReviewSection