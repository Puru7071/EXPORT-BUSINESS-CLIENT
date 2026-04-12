import LazyImage from '@/app/utils-components/LazyImage'
import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import { team } from '@/app/utils'

const TeamMemberCard = () => {
    return (
        <div className='w-full h-auto px-48 flex flex-row justify-center flex-wrap mb-16 gap-2 -mt-42 max-md:px-4 max-md:grid max-md:grid-cols-2 max-md:gap-4 max-md:-mt-12 max-md:mb-10'>
            {team?.map((member, index) => <div key={'team'+" " +member.name+" "+member.designation} className={`h-[400px] w-[300px] flex flex-col items-center rounded-2xl max-md:h-[320px] max-md:w-full ${team.length % 2 !== 0 && index === team.length - 1 ? 'max-md:col-span-2 max-md:mx-auto max-md:max-w-[12rem]' : ''}`}>
                <LazyImage
                    src={member?.url}
                    alt={member?.name + " " + member?.designation}
                    classes="h-[85%] w-[80%] rounded-xl shadow-xl max-md:h-[240px] max-md:w-[85%]"
                    imageClasses="object-cover"
                    cover={false}
                    direct
                    hoverAnimation={false}
                />
                <div className=' text-lg w-[80%] tracking-tight text-center font-bold text-zinc-600 max-md:w-full max-md:text-base'>
                    {member.name}
                </div>
                <div className='flex flex-row w-[80%] tracking-tight justify-center items-center gap-2 text-amber-700 font-bold text-base max-md:w-full max-md:text-sm'>
                    <FaBriefcase /> {member?.designation}
                </div>
            </div>)}
        </div>
    )
}

export default TeamMemberCard