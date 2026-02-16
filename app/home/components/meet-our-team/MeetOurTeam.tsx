import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const MeetOurTeam = () => {
    return (
        <>
            <div
                className='h-[450px] w-full flex flex-col justify-center items-center '
                style={{
                    backgroundImage: `url('/assets/teams-background.svg')`
                }}
            >
                <div className=' w-[50%] text-center text-gray-700 text-shadow-red-900 text-6xl font-bold -mt-32'>
                    Committed  to Excellence <br /> in Every Shipment.
                </div>
            </div>
            <TeamMemberCard/>
        </>
    )
}

export default MeetOurTeam