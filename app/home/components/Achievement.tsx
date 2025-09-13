"use client"
import { motion } from "framer-motion";
import { heroAchievement } from "@/app/utils/index";
import { FaBookmark } from "react-icons/fa";
import { memo, useEffect, useState } from "react";

const Card = memo(({ title, description, visible, index }: any) => {
    return visible ?
        (<motion.div
            key={`Achivement-Hero-Section-${index}`}
            className='border-0 bg-[#212529]/80 rounded h-[140px] w-[220px] relative flex flex-col gap-2'
            initial={{opacity:0 , scale:0}}
            animate={{opacity:[0,0.5,1] , scale:[0,1.1,1] }}
        >
            <div className='flex w-full justify-between'>
                <span className='text-white text-xl relative top-2 left-4'>{title}</span>
                <div className='relative -top-1'>
                    <FaBookmark className='text-4xl text-amber-500' />
                    <span className='absolute -top-1 w-full h-full flex justify-center items-center text-white text-base font-[600]'>{index + 1}</span>
                </div>
            </div>

            <div className='text-justify px-4 text-[#adb5bd]'>
                {description}
            </div>
        </motion.div>)
        : null
});

const Achievement = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    let achievements = heroAchievement.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex(prev => {
                if (prev + 1 >= achievements) {
                    clearInterval(interval);
                    return prev
                }
                return prev + 1;
            })
        }, 1000)

        return () => clearInterval(interval)
    }, []);

    return (
        <div
            className='flex flex-row gap-4 relative mt-10'
        >
            {heroAchievement?.map((achievement, index) => {
                const visible = index <= visibleIndex;
                return <Card
                    key={`HERO-ACHIEVEMENT-CARDS-WRAPPER-${index}`}
                    title={achievement.title}
                    description={achievement.description}
                    visible={visible}
                    index={index}
                />
            })}
        </div>
    )
}

export default Achievement