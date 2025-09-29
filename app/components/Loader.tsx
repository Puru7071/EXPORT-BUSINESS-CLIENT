import React from "react";

interface LoaderProps {
  size?: number; // size in pixels, default 100
}

const Loader: React.FC<LoaderProps> = ({ size = 100 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={size}
      height={size}
    >
      <radialGradient
        id="a8"
        cx=".66"
        fx=".66"
        cy=".3125"
        fy=".3125"
        gradientTransform="scale(1.5)"
      >
        <stop offset="0" stopColor="#FF156D" />
        <stop offset=".3" stopColor="#FF156D" stopOpacity={0.9} />
        <stop offset=".6" stopColor="#FF156D" stopOpacity={0.6} />
        <stop offset=".8" stopColor="#FF156D" stopOpacity={0.3} />
        <stop offset="1" stopColor="#FF156D" stopOpacity={0} />
      </radialGradient>

      <circle
        fill="none"
        stroke="url(#a8)"
        strokeWidth={15}
        strokeLinecap="round"
        strokeDasharray="200 1000"
        strokeDashoffset={0}
        cx={100}
        cy={100}
        r={70}
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        fill="none"
        opacity={0.2}
        stroke="#FF156D"
        strokeWidth={15}
        strokeLinecap="round"
        cx={100}
        cy={100}
        r={70}
      />
    </svg>
  );
};

export default Loader;
