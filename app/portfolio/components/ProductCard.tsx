import LazyImage from '@/app/utils-components/LazyImage'
import React, { ReactElement } from 'react'
import { email } from '@/app/utils'
import { FcInfo } from "react-icons/fc";
import { NullTypeT } from 'maplibre-gl';

export interface PortfolioItem {
    id: number;
    name: string;
    image: string;
    description: string;
    isCustomizable?: boolean;
    customizableTooltipContent?: string | null;
}


type ProductCardProps = {
    item: PortfolioItem,
    bucket: string,
}

const InfoButton = ({ content }: { content: string | null | undefined }) => {
    if (content) {
        return (<div className='absolute bottom-2 right-2 z-5 shadow-2xl group'>
            <FcInfo className=' text-2xl' />

            <div className="hidden group-hover:block hyphens-auto absolute bottom-8 w-50 right-1 z-10 bg-[black] text-white text-xs p-2 rounded-sm shadow-2xl">
                {content}
                {/* ÷<div className='absolute -bottom-2 right-1 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white'/> */}
            </div>
        </div>)
    }
    return <></>
}

const ProductCard = ({ item, bucket }: ProductCardProps) => {
    return (
        <div className='h-96 w-full p-2 border-[0.2px] border-slate-200 relative'>
            <div className='w-full h-[70%] rounded-sm overflow-hidden'>
                <LazyImage
                    src={`${bucket}${item?.image}`}
                    classes="h-[100%] w-full transition-all duration-500 cursor-pointer"
                    alt={`${item?.name} Image`}
                    hoverAnimation={false}
                >
                    {item.isCustomizable ? <InfoButton content={item.customizableTooltipContent} /> : null}
                </LazyImage>
            </div>
            <div className='w-full font-[600] text-slate-700 mt-2 text-xl px-2'>
                {item?.name?.toUpperCase()}
            </div>
            <div className='w-full h-8 font-[500] text-slate-500 text-xs mt-1 px-2 text-ellipsis'>
                {item?.description}
            </div>

            <div className={`absolute bottom-0 left-0 flex justify-end p-2 w-full`}>
                <a
                    href={`mailto:${email}?subject=Inquiry%20Regarding%20${item?.name}&body=Mr%20Bhargava,%0A%0AI%20hope%20you%27re%20doing%20well.%0A%0AI%20would%20like%20to%20request%20the%20pricing%20and%20availability%20details%20for%20${item?.name}.%20Kindly%20provide%20the%20current%20rate,%20minimum%20order%20quantity,%20and%20delivery%20information.%0A%0A${item?.isCustomizable
                        ? "Since%20this%20product%20supports%20customization,%20please%20also%20share%20the%20available%20custom%20options%20and%20requirements.%0A%0A"
                        : ""
                        }Regards`}

                    className='cursor-pointer font-[600] text-amber-700 text-xs'
                >
                    Get Cost Details
                </a>
            </div>
        </div>
    )
}

export default ProductCard