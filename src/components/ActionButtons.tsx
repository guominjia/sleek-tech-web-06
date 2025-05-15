
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, File, History } from "lucide-react";

interface ActionButtonsProps {
  onGenerateReport: () => void;
  onViewHistory: () => void;
  selectedWeek: string;
  onWeekChange: (week: string) => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onGenerateReport,
  onViewHistory,
  selectedWeek,
  onWeekChange,
}) => {
  const weeks = ["WW10", "WW11", "WW12", "WW13", "WW14"];

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button
        onClick={onGenerateReport}
        className="flex items-center gap-2 bg-tech-blue hover:bg-blue-600 text-white"
      >
        <File className="h-4 w-4" />
        Generate Report
      </Button>
      
      <div className="relative">
        <Button
          variant="outline"
          className="flex items-center gap-2 border border-gray-200"
          onClick={() => document.getElementById("week-dropdown")?.classList.toggle("hidden")}
        >
          {selectedWeek}
          <ChevronDown className="h-4 w-4" />
        </Button>
        
        <div 
          id="week-dropdown" 
          className="absolute z-10 hidden mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg"
        >
          {weeks.map((week) => (
            <div
              key={week}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onWeekChange(week);
                document.getElementById("week-dropdown")?.classList.add("hidden");
              }}
            >
              {week}
            </div>
          ))}
        </div>
      </div>
      
      <Button
        onClick={onViewHistory}
        className="flex items-center gap-2 bg-white border border-gray-200 text-tech-dark hover:bg-gray-50"
      >
        <History className="h-4 w-4" />
        View History
      </Button>
    </div>
  );
};

export default ActionButtons;
