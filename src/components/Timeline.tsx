
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Calendar, ChevronDown, ChevronUp, Circle, CircleDot } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

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

const Timeline: React.FC<TimelineProps> = ({ data }) => {
  const [selectedWeek, setSelectedWeek] = useState<WeekData | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {data.map((year) => (
        <div key={year.id} className="mb-8">
          {/* Year Section */}
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
              <Calendar className="h-4 w-4" />
            </div>
            <h2 className="ml-3 text-xl font-semibold text-blue-500">{year.name}</h2>
          </div>
          
          <div className="border-l-2 border-blue-200 ml-4 pl-8">
            <Accordion type="single" collapsible className="w-full">
              {year.months.map((month) => (
                <AccordionItem key={month.id} value={month.id} className="border-b border-blue-100">
                  <AccordionTrigger className="py-3 text-left font-medium hover:text-blue-500">
                    {month.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-4 border-l border-blue-100 py-2 space-y-4">
                      {month.weeks.map((week) => (
                        <div key={week.id} className="relative">
                          <div 
                            className="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-3"
                          >
                            <CircleDot className="h-3 w-3 text-blue-500" />
                          </div>
                          <Collapsible>
                            <div className="flex items-center justify-between cursor-pointer py-1">
                              <div
                                className="flex-1"
                                onClick={() => setSelectedWeek(week)}
                              >
                                <p className="font-medium text-gray-700">{week.name}</p>
                                <p className="text-sm text-gray-500">{week.description}</p>
                              </div>
                              <CollapsibleTrigger className="p-1 hover:bg-blue-50 rounded-full transition-colors">
                                <ChevronDown className="h-4 w-4 text-blue-500" />
                              </CollapsibleTrigger>
                            </div>
                            <CollapsibleContent>
                              <div className="pl-4 py-2 mt-1 border-l border-dashed border-blue-100 text-sm text-gray-600">
                                {week.details}
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      ))}

      {/* Dialog for detailed view */}
      <Dialog open={selectedWeek !== null} onOpenChange={(isOpen) => !isOpen && setSelectedWeek(null)}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-center">{selectedWeek?.name}</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-blue-500 mb-1">{selectedWeek?.date}</p>
            <h3 className="font-medium mb-2">{selectedWeek?.description}</h3>
            <p className="text-sm text-gray-600">{selectedWeek?.details}</p>
          </div>
          <div className="flex justify-center mt-2">
            <DialogClose asChild>
              <Button variant="outline">关闭</Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Timeline;
