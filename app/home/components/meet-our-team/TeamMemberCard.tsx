import LazyImage from '@/app/utils-components/LazyImage'
import React from 'react'
import { FaBriefcase } from 'react-icons/fa6'
import { team } from '@/app/utils'

const TeamMemberCard = () => {
    return (
        <div className='w-full h-auto px-48 flex flex-row justify-center flex-wrap mb-16 gap-2 -mt-42 '>
            {team?.map((member) => <div key={'team'+" " +member.name+" "+member.designation} className='h-[400px] w-[300px] flex flex-col items-center rounded-2xl'>
                <LazyImage
                    src={member?.url}
                    alt={member?.name + " " + member?.designation}
                    classes="h-[85%] w-[80%] object-contain rounded-xl shadow-xl"
                    direct
                    hoverAnimation={false}
                />
                <div className=' text-lg w-[80%] tracking-tight text-center font-bold text-zinc-600'>
                    {member.name}
                </div>
                <div className='flex flex-row w-[80%] tracking-tight justify-center items-center gap-2 text-amber-700 font-bold text-base'>
                    <FaBriefcase /> {member?.designation}
                </div>
            </div>)}
        </div>
    )
}

export default TeamMemberCard