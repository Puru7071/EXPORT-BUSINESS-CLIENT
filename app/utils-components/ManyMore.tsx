import React, { ReactElement } from 'react'

const ManyMore = ({}) => {
    return (
        <div
            className=' flex justify-start items-end gap-6 px-4 zoom-85 min-h-[150px]'
        >
            <div className=' text-8xl text-[#E87F24] font-bold relative'>&</div>
            <div className=' text-4xl italic font-[700] text-zinc-600 relative -top-2 -left-5'> more...</div>
        </div>
    )
}

export default ManyMore