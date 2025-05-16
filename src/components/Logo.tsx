
import React from "react";
import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 w-14 h-14 rounded-xl shadow-lg flex items-center justify-center text-white shadow-blue-500/30 animate-fade-in">
        <Brain className="h-8 w-8" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          Smart
        </span>
        <span className="-mt-1.5 font-semibold text-lg tracking-tight bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">
          Work Assistant
        </span>
      </div>
    </div>
  );
};

export default Logo;
