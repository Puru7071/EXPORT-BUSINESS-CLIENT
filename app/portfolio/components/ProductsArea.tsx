"use client"

import React from 'react'
import { useSpeciesPortfolio } from '../portfolio-apis'
import ProductCard from './ProductCard'

const supabaseUrl = process.env.NEXT_PUBLIC_BASE_URL!

type ProductsAreaProps = {
    table: string,
    heading: string,
    bucket: string
}

const ProductsArea = ({ table, heading, bucket }: ProductsAreaProps) => {
    const { data: items, isLoading, error } = useSpeciesPortfolio(table);
    return (
        <>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10'>
                {items?.map((item : any, index : number) => <ProductCard
                    item={item}
                    bucket={`${supabaseUrl}/storage/v1/object/public/${bucket}`}
                    key={`PORTFOLIO-ITEMS-${index}`} 
                />)}
            </div>
        </>

    )
}

export default ProductsArea