import React, { ReactElement } from 'react'
import MapArea from './MapArea'
import SEOGenerator from '../../../components/SEOGenerator'
import Content from './Content'

const SEOContent = (): ReactElement => {
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
        <div
            className='w-full h-auto px-20 py-20 relative flex flex-row gap-10 bg-contain'
            // style={{
            //     backgroundImage: `linear-gradient(rgba(254, 250, 224, 0.6), rgba(254, 250, 224, 0.6)), url('/form-bg.webp')`,
            //     backgroundSize: 'cover',
            //     backgroundPosition: 'bottom' ,
            //     backgroundRepeat: 'no-repeat',
            // }}
        >
            <MapArea />
            <SEOGenerator ariaLabel="Interactive India Coverage Map showing connections from Yamunanagar to major states and neighboring countries.">
                {<SEOContent />}
            </SEOGenerator>
            <Content />
        </div>
    )
}

export default Connect