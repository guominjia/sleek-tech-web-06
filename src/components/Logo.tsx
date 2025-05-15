
import React from "react";
import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-tech-blue to-blue-700 w-10 h-10 rounded-lg shadow-md flex items-center justify-center text-white">
        <Brain className="h-6 w-6" />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xl font-bold bg-gradient-to-r from-tech-blue to-blue-600 bg-clip-text text-transparent">Smart</span>
        <span className="-mt-1.5 text-tech-dark font-medium">Work Assistant</span>
      </div>
    </div>
  );
};

export default Logo;
