import React from 'react'
import { IoMail } from "react-icons/io5";
import LazyImage from './LazyImage'

type BannerProps = {
    bannerColor?: string,
    bannerText: string,
    bannerTextClass?: string,
    bannerHref: string,
    bannerAlt: string,
    emailButtonColor?: string,
    emailButtonTextColor ?: string
    mail: string
}

const Banner = ({
    bannerColor = "bg-[#fcf1e5]",
    bannerText,
    bannerTextClass,
    bannerHref,
    emailButtonColor = "bg-[#013d27]",
    emailButtonTextColor = "text-[white]",
    mail,
    bannerAlt
}: BannerProps) => {
    return (
        <div className={`w-full h-108 ${bannerColor} flex flex-row justify-between`}>
            <div className='py-16 px-12 flex flex-col justify-between w-[60%] '>
                <div className={`text-[#0e3221] font-bold text-6xl leading-18 ${bannerTextClass}`}>
                    {bannerText}
                </div>
                <a className={`${emailButtonColor} w-48 ${emailButtonTextColor} text-2xl font-[600] rounded-lg px-8 py-3 mt-12 cursor-pointer flex flex-row justify-between items-center gap-2`} href={mail}>
                    <IoMail/> Email Us
                </a>
            </div>

            <div className='w-[40%] h-full'>
                <LazyImage
                    alt={bannerAlt}
                    src={bannerHref}
                    classes='h-[100%] w-[100%]'
                    direct
                    hoverAnimation={false}
                />
            </div>
        </div>
    )
}

export default Banner