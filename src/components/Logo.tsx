
import React from "react";
import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 w-12 h-12 rounded-lg shadow-lg flex items-center justify-center text-white">
        <Brain className="h-7 w-7" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">Smart</span>
        <span className="-mt-1.5 text-tech-dark font-medium text-lg tracking-tight">Work Assistant</span>
      </div>
    </div>
  );
};

export default Logo;
