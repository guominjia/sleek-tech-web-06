
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { ChevronDown, File, History, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

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
  const [selectedWeeks, setSelectedWeeks] = useState<string[]>([selectedWeek]);

  const toggleWeek = (week: string) => {
    setSelectedWeeks((current) => {
      // Check if week is already selected
      const isSelected = current.includes(week);
      
      // If it's already selected, remove it, otherwise add it
      if (isSelected) {
        // Don't allow removing if it's the last selected item
        if (current.length === 1) return current;
        return current.filter(w => w !== week);
      } else {
        return [...current, week];
      }
    });
    
    // Update the parent state with the first selected week for backward compatibility
    // In a real app, you'd likely want to update this to handle multiple weeks
    onWeekChange(week);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <Button
        onClick={onGenerateReport}
        className="flex items-center gap-2 bg-tech-blue hover:bg-blue-600 text-white"
      >
        <File className="h-4 w-4" />
        Generate Report
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="flex items-center gap-2 border border-gray-200 bg-white"
          >
            {selectedWeeks.length > 1 ? `${selectedWeeks.length} selected` : selectedWeek}
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-[120px] bg-white">
          {weeks.map((week) => (
            <DropdownMenuCheckboxItem
              key={week}
              checked={selectedWeeks.includes(week)}
              onCheckedChange={() => toggleWeek(week)}
              className="cursor-pointer"
            >
              {week}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
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
