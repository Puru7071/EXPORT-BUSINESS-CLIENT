"use client";
import React, { useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const IndiaCoverageMap = dynamic(() => import("./IndiaCoverageMap"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[500px] w-[500px] flex items-center justify-center">
      {/* Placeholder image */}
      <img
        src="/map-thumbnail.webp"
        alt="MAP LOADING..."
        className="w-full h-full object-contain rounded-lg"
      />

      {/* Loader overlay */}
      <div className="absolute inset-0 flex items-center h-full w-full justify-center bg-white/30 backdrop-blur-sm rounded-lg transition-opacity duration-700 opacity-100">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
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
  }, []);

  return (
    <div
      ref={containerRef}
      className={`h-[500px] w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] relative transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Interactive India Coverage Map showing connections from Yamunanagar to major states and neighboring countries."
      style={{ willChange: "opacity" }}
    >
      {isVisible && <IndiaCoverageMap />}
    </div>
  );
};

export default React.memo(MapArea);
