
import React from "react";
import { Brain } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-tech-blue to-blue-700 w-9 h-9 rounded-lg shadow-md flex items-center justify-center text-white">
        <Brain className="h-5 w-5" />
      </div>
      <div className="font-semibold text-tech-dark flex flex-col items-start">
        <span className="text-tech-blue">Smart</span>
        <span className="-mt-1.5">Work Assistant</span>
      </div>
    </div>
  );
};

export default Logo;
