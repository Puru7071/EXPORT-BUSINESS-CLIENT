import React, { ReactElement } from 'react'
import MapArea from './MapArea'
import SEOGenerator from '../../../components/SEOGenerator'
import Content from './Content'

const SEOContent = () : ReactElement => {
    return (
        <>
            <h2 className="text-2xl font-bold">
                Interactive India Coverage Map with Routes
            </h2>
            <p className="mt-4 text-gray-600">
                This interactive India coverage map shows animated connections
                from Yamunanagar to key destinations including Kashmir, Bihar,
                Karnataka, Bhutan, Nepal, Bangladesh, and Sri Lanka. Explore
                routes with smooth curved paths and markers for better visualization.
            </p>
        </>
    )
}
const Connect = () => {
    return (
        <div className='w-full h-auto px-20 py-10 bg-[#f5f5f5] relative flex flex-row gap-10'>
            <MapArea />
            <SEOGenerator ariaLabel="Interactive India Coverage Map showing connections from Yamunanagar to major states and neighboring countries.">
                {<SEOContent/>}
            </SEOGenerator>
            <Content/>
        </div>
    )
}

export default Connect