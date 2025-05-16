
import React from "react";
import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        {/* Animated pulse/glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 via-violet-400/50 to-cyan-400/50 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Logo icon container */}
        <div className="bg-gradient-to-br from-blue-400 via-violet-500 to-cyan-400 w-14 h-14 rounded-xl shadow-lg flex items-center justify-center text-white shadow-blue-300/30 animate-fade-in relative z-10">
          {/* Circuit pattern overlay for tech feel */}
          <div className="absolute inset-0 opacity-20 rounded-xl overflow-hidden">
            <svg width="100%" height="100%" viewBox="0 0 56 56">
              <path d="M14,8 L42,8 M8,14 L8,42 M14,48 L42,48 M48,14 L48,42 M16,16 L40,16 M16,40 L40,40 M28,16 L28,40" 
                fill="none" 
                stroke="white" 
                strokeWidth="0.5"
                strokeLinecap="round" />
              <circle cx="28" cy="28" r="8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.6" />
              <circle cx="28" cy="28" r="4" fill="none" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          
          {/* Brain icon representing AI */}
          <Brain className="h-7 w-7 animate-pulse" />
          
          {/* Orbital ring representing advanced tech */}
          <div className="absolute w-full h-full rounded-xl border border-white/20 animate-[spin_12s_linear_infinite]"></div>
        </div>
      </div>
      
      <div className="flex flex-col items-start">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent tracking-tight drop-shadow-sm animate-fade-in">
          Smart AI
        </span>
        <span className="-mt-1.5 font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Work Assistant
        </span>
      </div>
    </div>
  );
};

export default Logo;
