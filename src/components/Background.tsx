
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-light via-white to-tech-bg opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E88E5" stopOpacity="0.07" />
              <stop offset="50%" stopColor="#1E88E5" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#1E88E5" stopOpacity="0.07" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGradient)" />
          <g fill="none" stroke="#1E88E5" strokeWidth="0.5" opacity="0.2">
            {Array.from({ length: 24 }).map((_, i) => (
              <path 
                key={i} 
                d={`M${Math.random() * 1920},${Math.random() * 1080} Q${Math.random() * 1920},${Math.random() * 1080} ${Math.random() * 1920},${Math.random() * 1080}`}
              />
            ))}
          </g>
          <g fill="#1E88E5" opacity="0.15">
            {Array.from({ length: 60 }).map((_, i) => (
              <circle 
                key={i} 
                cx={Math.random() * 1920} 
                cy={Math.random() * 1080} 
                r={Math.random() * 5} 
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Background;
