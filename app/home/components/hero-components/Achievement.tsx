"use client"
import { motion } from "framer-motion";
import { heroAchievement } from "@/app/utils/index";
import { FaBookmark } from "react-icons/fa";
import { memo, useEffect, useState } from "react";

interface CardProps {
    title : string , 
    description : string , 
    visible : boolean , 
    index : number
}

const Card = memo(({ title, description, visible, index }: CardProps) => {
    return visible ?
        (<motion.div
            key={`Achivement-Hero-Section-${index}`}
            className='border-0 bg-[#212529]/80 rounded pb-4 relative flex h-full flex-col gap-2 max-md:min-h-[8.5rem] max-md:rounded-2xl max-md:border max-md:border-white/10 max-md:bg-black/55 max-md:px-3 max-md:pb-3 max-md:pt-2 max-md:shadow-lg'
            initial={{opacity:0 , scale:0}}
            animate={{opacity:[0,0.5,1] , scale:[0,1.1,1] }}
        >
            <div className='flex w-full justify-between'>
                <span className='text-white  relative top-2 left-4 lg:text-base xl:text-xl max-md:static max-md:max-w-[calc(100%-2.5rem)] max-md:overflow-hidden max-md:text-ellipsis max-md:whitespace-nowrap max-md:text-xs max-md:font-semibold'>
                    {title}
                </span>
                <div className='relative -top-1 max-md:top-0 max-md:shrink-0'>
                    <FaBookmark className='text-4xl text-amber-500 max-md:text-3xl' />
                    <span className='absolute -top-1 w-full h-full flex justify-center items-center text-white text-base font-[600] max-md:text-xs'>{index + 1}</span>
                </div>
            </div>

            <div className='text-[#adb5bd] px-2 break-all max-md:px-0 max-md:text-[11px] max-md:leading-relaxed max-md:break-words'>
                {description}
            </div>
        </motion.div>)
        : null
});

Card.displayName = "Card"

const Achievement = () => {
    const [visibleIndex, setVisibleIndex] = useState(0);
    const achievements = heroAchievement.length;

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
    }, [achievements]);

    return (
        <div
            className='relative mt-10 grid grid-cols-5 gap-3 md:auto-rows-fr max-md:mt-6 max-md:grid-cols-2'
        >
            {heroAchievement?.map((achievement, index) => {
                const visible = index <= visibleIndex;
                return (
                    <div key={`HERO-ACHIEVEMENT-CARDS-WRAPPER-${index}`} className={`${index >= 4 ? 'max-md:hidden' : ''} max-md:min-h-[8.5rem]`}>
                        <Card
                            title={achievement.title}
                            description={achievement.description}
                            visible={visible}
                            index={index}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Achievement