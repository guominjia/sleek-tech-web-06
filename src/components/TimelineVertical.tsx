
import React, { useState } from "react";
import { Calendar, Circle } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

// Define types for our data structure
interface WeekData {
  id: string;
  name: string;
  date: string;
  description: string;
  details: string;
}

interface MonthData {
  id: string;
  name: string;
  weeks: WeekData[];
}

interface YearData {
  id: string;
  name: string;
  months: MonthData[];
}

interface TimelineProps {
  data: YearData[];
}

const TimelineVertical: React.FC<TimelineProps> = ({ data }) => {
  const [selectedWeekId, setSelectedWeekId] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[800px] py-6 px-4">
      {/* Central vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-400"></div>
      
      <div className="space-y-16">
        {data.map((year) => (
          <div key={year.id} className="relative">
            {/* Year marker */}
            <div className="flex items-center justify-center mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 z-10">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div className="mt-2 text-center">
                  <span className="font-bold text-blue-600">{year.name}</span>
                </div>
              </div>
            </div>
            
            {/* Months and weeks */}
            <div className="space-y-12">
              {year.months.map((month) => (
                <div key={month.id} className="relative">
                  {/* Month marker */}
                  <div className="absolute left-1/2 -translate-x-1/2 -mt-6 z-10">
                    <div className="w-6 h-6 rounded-full bg-blue-300 border-2 border-white shadow flex items-center justify-center">
                      <Circle className="h-2 w-2 text-white fill-white" />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="text-sm font-medium text-blue-500">{month.name}</span>
                    </div>
                  </div>
                  
                  {/* Weeks */}
                  <div className="mt-10 space-y-4">
                    {month.weeks.map((week, idx) => (
                      <div key={week.id} className="relative">
                        {/* Week marker */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-3 z-10">
                          <div className="w-3 h-3 rounded-full bg-blue-200 border-2 border-white"></div>
                        </div>
                        
                        {/* Week content - alternating left and right */}
                        <div className={cn(
                          "w-[calc(50%-30px)] p-3 rounded-lg transition-all duration-200",
                          idx % 2 === 0 
                            ? "ml-auto mr-[30px] bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm" 
                            : "mr-auto ml-[30px] bg-gradient-to-r from-purple-50 to-blue-50 shadow-sm"
                        )}>
                          <Popover>
                            <PopoverTrigger asChild>
                              <div className="cursor-pointer hover:bg-blue-50/80 p-2 rounded-md transition-colors">
                                <div className="flex justify-between items-center">
                                  <h3 className="text-sm font-medium text-blue-800">{week.name}</h3>
                                  <span className="text-xs text-blue-500">{week.date}</span>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">{week.description}</p>
                              </div>
                            </PopoverTrigger>
                            <PopoverContent side={idx % 2 === 0 ? "left" : "right"} 
                              className="bg-white/90 backdrop-blur-sm w-[280px] border border-blue-100 p-4 shadow-lg">
                              <div className="space-y-2">
                                <h4 className="font-medium text-blue-800">{week.description}</h4>
                                <p className="text-sm text-gray-600">{week.details}</p>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineVertical;
