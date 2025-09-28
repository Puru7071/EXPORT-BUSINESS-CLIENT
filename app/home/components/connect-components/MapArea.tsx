"use client";
import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const IndiaCoverageMap = dynamic(() => import("./IndiaCoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[500px] w-[500px] object-cover opacity-100 transition-all duration-700">
      <img
        src="/map-thumbnail.webp"
        alt="MAP LOADING..."
        className="w-full h-full object-contain"
      />
    </div>
  ),
});

const MapArea = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className={`h-[500px] w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] relative transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Interactive India Coverage Map showing connections from Yamunanagar to major states and neighboring countries."
      style={{ willChange: "transform" }}
    >
      {isVisible && <IndiaCoverageMap />}
    </div>
  );
};

export default React.memo(MapArea);
