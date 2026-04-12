import React, { ReactElement } from 'react'

const ManyMore = ({}) => {
    return (
        <div
            className=' flex justify-start items-end gap-6 px-4 zoom-85 min-h-[150px] max-md:min-h-[100px] max-md:justify-center max-md:gap-3'
        >
            <div className=' text-8xl text-[#E87F24] font-bold relative max-md:text-5xl'>&</div>
            <div className=' text-4xl italic font-[700] text-zinc-600 relative -top-2 -left-5 max-md:text-2xl max-md:top-0 max-md:left-0'> more...</div>
        </div>
    )
}

export default ManyMore