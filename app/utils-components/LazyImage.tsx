"use client"
import { useState, useRef, useEffect, type ReactElement } from "react"
import Image from "next/image";

type LazyImageProps = {
  alt: string;
  src: string;
  classes?: string;
  children?: ReactElement | null;
  priority?: boolean;
  direct?: boolean;
  hoverAnimation?: boolean
};

const Skeleton = () => {
    return <div className="h-full w-full bg-black/10 animate-pulse absolute inset-0 z-2"></div>
}

const LazyImage = ({ 
    alt, 
    src , 
    classes = "" , 
    children = null , 
    priority = false , 
    direct = false , 
    hoverAnimation = true , 
}: LazyImageProps) => {
    const [visible, setVisible] = useState<boolean>(false) ;
    const [loading , setLoading] = useState<boolean>(true) ; 
    const imgRef = useRef(null);

    const ObserverCallback = (enteries : IntersectionObserverEntry[], obs : IntersectionObserver) => {
        enteries.forEach((entry) => {
            if (entry.isIntersecting){
                setVisible(true) ; 
                obs.unobserve(entry.target) ; 
            }
        }) ; 
    }

    useEffect(() => {
        const observer = new IntersectionObserver(ObserverCallback, { threshold: 0.1 })

        if(imgRef.current){
            observer.observe(imgRef.current) ; 
        }

        return () => observer.disconnect() ; 

    }, [imgRef])
    return (
        <div
            className={`image-frame relative overflow-hidden ${classes}`}
            ref={imgRef}
        >
            {visible && <Image
                src={src}
                fill
                priority={priority}
                alt={alt}
                className={`object-cover z-1 transition-all ease-in-out duration-500 cursor-pointer ${hoverAnimation && "hover:scale-110"} ${loading ? "opacity-0" : "opacity-100"}`}
                onLoadingComplete={() => setLoading(false)}
            />}

            {loading && !direct && <Skeleton/>}

            {!loading && children}
        </div>
    )
}

export default LazyImage; 