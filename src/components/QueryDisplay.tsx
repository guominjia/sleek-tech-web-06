
import React from "react";
import { File, Edit } from "lucide-react";

interface QueryDisplayProps {
  selectedWeek: string;
  query: string;
}

const QueryDisplay: React.FC<QueryDisplayProps> = ({ selectedWeek, query }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium text-tech-dark mb-1">
            Selected Work Weeks: {selectedWeek}
          </h3>
          <div className="text-gray-700">
            <p className="mb-0">Query:</p>
            <p className="text-gray-600">{query || "No query specified"}</p>
          </div>
        </div>
        
        <div className="flex gap-2 text-gray-400">
          <File className="h-5 w-5 cursor-pointer hover:text-tech-blue transition-colors" />
          <Edit className="h-5 w-5 cursor-pointer hover:text-tech-blue transition-colors" />
        </div>
      </div>
    </div>
  );
};

export default QueryDisplay;
