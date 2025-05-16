
import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Lighter background gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-50 to-blue-100 opacity-95"></div>
      
      {/* Slightly enhanced mesh gradient overlay */}
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-300 via-blue-300 to-transparent"></div>
      
      {/* Grid pattern with slightly more pronounced lines */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoLTZ2LTZoNnptLTYtMTh2NmgtNnY2aC02djZoNnY2aDZ2LTZ2LTZ2LTZ6bTYgMTJ2LTZoLTZ2NmgtNnY2aDZ2LTZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-25"></div>
      
      {/* Enhanced Tech Circuit Lines - more visible but not overpowering */}
      <div className="absolute top-0 left-0 w-full h-full opacity-25">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#techGradient)" opacity="0.15" />
          <g fill="none" stroke="#60a5fa" strokeWidth="1" opacity="0.6">
            {Array.from({ length: 40 }).map((_, i) => (
              <path 
                key={i} 
                d={`M${Math.random() * 1920},${Math.random() * 1080} Q${Math.random() * 1920},${Math.random() * 1080} ${Math.random() * 1920},${Math.random() * 1080}`}
              />
            ))}
          </g>
          <g fill="#a78bfa" opacity="0.5">
            {Array.from({ length: 100 }).map((_, i) => (
              <circle 
                key={i} 
                cx={Math.random() * 1920} 
                cy={Math.random() * 1080} 
                r={Math.random() * 3 + 1} 
              />
            ))}
          </g>
        </svg>
      </div>
      
      {/* Particle Glow Effects - lighter, pastel colors */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-cyan-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-pulse delay-700"></div>
    </div>
  );
};

export default Background;
