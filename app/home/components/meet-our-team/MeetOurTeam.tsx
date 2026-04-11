import React from 'react'
import TeamMemberCard from './TeamMemberCard'
import Header from '@/app/utils-components/Header';
import { getDesktopInfo } from "@/app/utils/util-functions";
import { headers } from 'next/headers';

const MeetOurTeam = async () => {
    const headerList = await headers();
    const userAgent = headerList.get("user-agent") || "";

    const { desktopOS } = getDesktopInfo(userAgent);
    return (
        <div className={`${desktopOS == 'macOS' ? "" : "zoom-85"}`}>
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
            <TeamMemberCard />
        </div>
    )
}

export default MeetOurTeam