"use client"
import React, { useRef, useEffect, useState } from 'react'
import dynamic from 'next/dynamic';


const MapArea = () => {
    const mapCanvasRef = useRef(null);
    const [mapCanvasVisible, setMapCanvasVisible] = useState<boolean>(false);
    const IndiaCoverageMap = dynamic(() => import("./IndiaCoverageMap"), {
        ssr: false ,
        loading: () => <div 
            className='h-[500px] w-[500px] object-cover opacity-100 transition-all duration-700'
        >
            <img
                src={"/map-thumbnail.webp"} 
                alt='MAP LOADING...'
                className='w-full h-full'
            />
        </div>
    })

    const ObserverCallBack = (enteries : IntersectionObserverEntry[], obs : IntersectionObserver) =>{
        enteries.forEach((entry) => {
            if(entry.isIntersecting){
                setMapCanvasVisible(true) ;
                obs.unobserve(entry.target) ; 
            }
        })
    }

    useEffect(() => {
        const observer = new IntersectionObserver(ObserverCallBack, { threshold: 0.2 }) ; 
        if(!!mapCanvasRef.current){
            observer.observe(mapCanvasRef.current) ;
        }

        return () => observer.disconnect() ;
    }, [mapCanvasRef])
    return (
        <div
            className='h-[500px] w-[500px] object-contain relative'
            ref={mapCanvasRef}
            aria-label="Interactive India Coverage Map showing connections from Yamunanagar to major states and neighboring countries."
        >
            {mapCanvasVisible && <IndiaCoverageMap />}
        </div>
    )
}

export default MapArea