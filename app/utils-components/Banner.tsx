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
    cover?: boolean
}

const Banner = ({
    bannerColor = "bg-[#fcf1e5]",
    bannerText,
    bannerTextClass,
    bannerHref,
    emailButtonColor = "bg-[#013d27]",
    emailButtonTextColor = "text-[white]",
    mail,
    bannerAlt,
    cover = true,
}: BannerProps) => {
    return (
        <div className={`w-full h-108 ${bannerColor} flex flex-row justify-between max-md:h-auto max-md:flex-col-reverse`}>
            <div className='py-16 px-12 flex flex-col justify-between w-[60%] max-md:w-full max-md:px-4 max-md:py-8 max-md:gap-6'>
                <div className={`text-[#0e3221] font-bold text-6xl leading-18 max-md:text-3xl max-md:leading-tight ${bannerTextClass}`}>
                    {bannerText}
                </div>
                <a className={`${emailButtonColor} w-40 self-start ${emailButtonTextColor} text-2xl font-[600] rounded-lg px-6 py-3 mt-12 cursor-pointer flex flex-row justify-center items-center gap-2 max-md:mt-0 max-md:w-auto max-md:min-w-36 max-md:text-lg`} href={mail}>
                    <IoMail/> Email Us
                </a>
            </div>

            <div className='w-[40%] h-full max-md:w-full max-md:h-64'>
                <LazyImage
                    alt={bannerAlt}
                    src={bannerHref}
                    classes='h-[100%] w-[100%]'
                    cover={cover}
                    direct
                    hoverAnimation={false}
                />
            </div>
        </div>
    )
}

export default Banner