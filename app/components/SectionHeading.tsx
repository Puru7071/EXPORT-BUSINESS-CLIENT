import React, { ReactElement } from 'react'

const SectionHeading = ({ heading , className = "" }: { heading: string | ReactElement , className ?: string }) => {
    return (
        <div className={className}>
            <h1 className="text-4xl pb-3 w-full font-bold tracking-wide text-gray-700">
                {typeof heading === "string" ?  heading?.toUpperCase() : heading}
            </h1>
            <div className="h-1 w-36 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 shadow-md mb-8" />
        </div>
    )
}

export default SectionHeading