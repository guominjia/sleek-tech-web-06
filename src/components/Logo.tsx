
import React from "react";
import { Sparkles } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-blue-400 via-violet-400 to-cyan-400 w-14 h-14 rounded-xl shadow-lg flex items-center justify-center text-white shadow-blue-300/30 animate-fade-in">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent tracking-tight drop-shadow-sm animate-fade-in">
          Smart
        </span>
        <span className="-mt-1.5 font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
          Work Assistant
        </span>
      </div>
    </div>
  );
};

export default Logo;
