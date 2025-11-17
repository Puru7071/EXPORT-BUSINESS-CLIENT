import React from 'react'

type ProductSkeletonProps = {
    skeletonCardsNumber?: number
}

const ProductSkeletonCard = ({ }) => (
    <div className='h-96 w-full p-2 border-[0.2px] border-slate-200 relative'>
        <div className='w-full h-[70%] rounded-sm overflow-hidden bg-black/20 animate-pulse relative'>
            <div className='rounded-full w-6 h-6 absolute bottom-2 right-2 bg-black/10 animate-pulse z-2'/>
        </div>
        <div className='w-[40%] h-8 mt-2 px-2 bg-black/15 rounded-sm animate-pulse'/>
        <div className='w-[60%] h-3 font-[500] px-2 mt-2 bg-black/15 animate-pulse'/>
        <div className='absolute bottom-2 left-0 px-2 w-full flex justify-end'>
            <div className='w-[60%] h-6 bg-black/10 animate-pulse'/>
        </div>
    </div>
)

const ProductSkeleton = ({
    skeletonCardsNumber = 7,
}: ProductSkeletonProps) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10'>
            {Array.from({ length: skeletonCardsNumber }).map((_, idx) => (
                <ProductSkeletonCard key={`SKELETON-${idx}`} />
            ))}
        </div>
    )
}

export default ProductSkeleton