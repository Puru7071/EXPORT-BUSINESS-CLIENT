import React from 'react'
import Banner from '@/app/utils-components/Banner'
import ProductsArea from './ProductsArea'
import { Suspense } from 'react'
import ProductSkeleton from '@/app/utils-components/ProductSkeleton'
import SectionHeading from '@/app/utils-components/SectionHeading'
import Footer from '@/app/utils-components/Footer'


type CategoryPortfolioProps = {
    bannerText: string,
    bannerHref: string,
    bannerAlt: string,
    mail: string,
    table: string,
    heading: string,
    bucket: string,
    bannerColor?: string,
    emailButtonColor?: string,
    emailButtonTextColor?: string,
    bannerTextClass?: string,
    productEmail: string
}


const CategoryPortfolio = ({
    bannerText,
    bannerHref,
    bannerAlt,
    mail,
    table,
    heading,
    bucket,
    bannerColor = "bg-[#fcf1e5]",
    emailButtonColor = "bg-[#013d27]",
    emailButtonTextColor = "text-[white]",
    bannerTextClass = "",
}: CategoryPortfolioProps) => {
    return (
        <>
            <Banner
                bannerText={bannerText}
                bannerHref={bannerHref}
                bannerAlt={bannerAlt}
                mail={mail}
                bannerColor={bannerColor}
                emailButtonColor={emailButtonColor}
                emailButtonTextColor={emailButtonTextColor}
                bannerTextClass={bannerTextClass}
            />
            <div className='w-full mx-auto px-12 py-8'>
                <SectionHeading
                    heading={heading}
                />
                <Suspense fallback={<ProductSkeleton />}>
                    <ProductsArea
                        table={table}
                        heading={heading}
                        bucket={bucket}
                    />
                </Suspense>
            </div>
            
            <Footer/>
        </>
    )
}

export default CategoryPortfolio;