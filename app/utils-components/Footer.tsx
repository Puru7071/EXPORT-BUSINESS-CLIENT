import React from 'react'
import Image from 'next/image'
import { creatorInfo, email, mobile } from '@/app/utils'
import { FaInstagram, FaLinkedin, FaGithub, FaPhoneAlt, FaAddressCard, FaEnvelope } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#242424] w-full h-auto flex flex-col items-center p-12 py-16'>
            <div className='w-[100%] flex flex-row justify-evenly items-center'>
                <div className='text-white font-bold flex justify-start items-center gap-4'>
                    <a href="/home" className="block">
                        <span className={`h-[45px] w-[135px] overflow-hidden flex justify-center items-center rounded-lg`}>
                            <Image
                                src="/assets/logo.webp"
                                alt="Bhargava Trading Co."
                                className="object-contain bg-white"
                                width={250}
                                height={160}
                            />
                        </span>
                    </a>
                    <div className='flex flex-col'>
                        <span className='text-xl'>All Rights reserved ©<span className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'> Bhargava Trading Co. </span></span>
                        <span className='text-sm text-zinc-400 flex flex-row gap-2'>
                            <a target='_blank' href={`mail:+91 ${mobile}`} className='flex flex-row items-center gap-2'> <FaPhoneAlt /> +91 {mobile} | </a>
                            <a target='_blank' href={`mail:${email}`} className='flex flex-row items-center gap-2'> <FaEnvelope />{email} </a>
                        </span>
                    </div>
                </div>

                <div className='h-12 w-1.5 bg-zinc-700/40 ' />

                <div className="my-0 text-white font-bold flex flex-col justify-between">
                    <span className='text-xl'>Made with ❤️ by <span className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'> Puru Bhargava</span></span>
                    <div className='flex flex-row gap-2 text-sm text-zinc-400'>
                        <a target='_blank' href={`mail:${creatorInfo.mail}`} className='flex flex-row items-center gap-2'> <FaEnvelope /> Email | </a>
                        <a target='_blank' href={creatorInfo.instagram} className='flex flex-row items-center gap-2'> <FaInstagram /> Instagram | </a>
                        <a target='_blank' href={creatorInfo.linkedIn} className='flex flex-row items-center gap-2'> <FaLinkedin /> LinkedIn | </a>
                        <a target='_blank' href={creatorInfo.github} className='flex flex-row items-center gap-2'> <FaGithub /> GitHub | </a>
                        <a target='_blank' href={`tel:+91 ${creatorInfo.number}`} className='flex flex-row items-center gap-2'> <FaPhoneAlt /> +91 {creatorInfo.number} | </a>
                        <a target='_blank' href={creatorInfo.portfolio} className='flex flex-row items-center gap-2'> <FaAddressCard /> Portfolio </a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer