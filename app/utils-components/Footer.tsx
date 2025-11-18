import React from 'react'
import Image from 'next/image'
import { creatorInfo, email, mobile } from '@/app/utils'
import { FaInstagram , FaWhatsapp, FaLinkedin, FaGithub, FaPhoneAlt, FaAddressCard, FaEnvelope } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-[#1f2939] p-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-10 md:gap-x-16 lg:gap-x-24'>
                <div className='col-span-1 md:col-span-2 lg:col-span-1'>
                    <div className='flex flex-row items-center gap-4 mb-6'>
                        <a href="/home" className="block">
                            <span className={`h-[115px] w-[85px] overflow-hidden flex justify-center items-center rounded-lg px-3 py-3 shadow-black/40 border border-white/10 bg-white/5 `}>
                                <Image
                                    src="/assets/footer-logo.png"
                                    alt="Bhargava Trading Co."
                                    className="object-cover bg-white rounded-lg"
                                    width={250}
                                    height={250}
                                />
                            </span>
                        </a>
                        <div className='font-extrabold h-full flex flex-col justify-between text-white text-2xl tracking-wide leading-tight drop-shadow'>
                            Bhargav <br />
                            Trading <br />
                            Co.
                        </div>
                    </div>
                    <p className="text-blue-200 text-sm mt-2">Driving Success Through Global Trade</p>
                    <p className="text-gray-300 mt-2 mb-6 leading-relaxed">Bhargav Trading Co. is your trusted partner for premium quality products exports.</p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <a href="/home" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group">
                                <span className="group-hover:text-blue-300">→</span> Home
                            </a>
                        </li>
                        <li>
                            <a href="/coming-soon" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group">
                                <span className="group-hover:text-blue-300">→</span> About
                            </a>
                        </li>
                        <li>
                            <a href="/coming-soon" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group">
                                <span className="group-hover:text-blue-300">→</span> Products
                            </a>
                        </li>
                        <li>
                            <a href="/coming-soon" className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group">
                                <span className="group-hover:text-blue-300">→</span> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-6 text-white">
                        Contact Information
                    </h3>

                    <ul className="space-y-4">

                        {/* Location */}
                        <li className="flex items-center gap-4 group">
                            <div className="w-8 h-8 shrink-0 bg-blue-600/20 backdrop-blur-md rounded-lg ring-1 ring-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-map-pin h-4 w-4 text-blue-400"
                                >
                                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 flex-1">
                                Yamunanagr (IN)
                            </a>
                        </li>

                        {/* Phone */}
                        <li className="flex items-center gap-4 group">
                            <div className="w-8 h-8 shrink-0 bg-blue-600/20 backdrop-blur-md rounded-lg ring-1 ring-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-phone h-4 w-4 text-blue-400"
                                >
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                            </div>
                            <a href={`tel:+91${mobile}`} className="text-gray-300 hover:text-white transition-colors duration-300 flex-1">
                                +91 {mobile}
                            </a>
                        </li>

                        {/* Email */}
                        <li className="flex items-center gap-4 group">
                            <div className="w-8 h-8 shrink-0 bg-blue-600/20 backdrop-blur-md rounded-lg ring-1 ring-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/40 transition-all duration-300">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-mail h-4 w-4 text-blue-400"
                                >
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                </svg>
                            </div>
                            <a
                                href={email}
                                className="text-gray-300 hover:text-white transition-colors duration-300 flex-1"
                            >
                                {email}
                            </a>
                        </li>

                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-6 text-white">Connect With Us</h3>

                    {/* WhatsApp Button */}
                    <div className="mb-6">
                        <a
                            href={`https://wa.me/91${mobile}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600/20 backdrop-blur-md text-green-300 hover:text-green-200 hover:bg-green-600/30 transition-all duration-300 px-4 py-3 rounded-xl border border-green-500/20 group"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5 mr-2 flex-shrink-0 drop-shadow-sm"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"></path>
                            </svg>

                            WhatsApp Chat

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-external-link h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                            >
                                <path d="M15 3h6v6"></path>
                                <path d="M10 14 21 3"></path>
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            </svg>
                        </a>
                    </div>

                </div>
            </div>

            <div className='border-t border-white/10 mt-12 pt-8'>
                <div className="my-0 text-white mx-auto font-bold gap-2 flex flex-col justify-between">
                    <span className='text-xl text-center'>Designed & Developed by <a target='_blank' href={creatorInfo.portfolio} className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent'> Puru Bhargava</a></span>
                    <div className='flex flex-row gap-2 text-sm w-full text-zinc-400 justify-center'>
                        <a target='_blank' href={`mail:${creatorInfo.mail}`} className='flex flex-row items-center gap-2'> <FaEnvelope /> Email | </a>
                        <a target='_blank' href={`https://wa.me/91${creatorInfo.number}`} className='flex flex-row items-center gap-2'> <FaWhatsapp /> WhatsApp |</a>
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