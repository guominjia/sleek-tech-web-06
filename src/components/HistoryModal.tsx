
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import Timeline from "./Timeline";
import { timelineData } from "@/data/timelineData";
import { X } from "lucide-react";

interface HistoryModalProps {
  open: boolean;
  onClose: () => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ open, onClose }) => {
  return (
    <Sheet open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <SheetContent side="right" className="w-full sm:w-[600px] overflow-y-auto">
        <SheetHeader className="mb-6">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-2xl font-semibold">历史记录</SheetTitle>
            <SheetClose onClick={onClose} className="p-1 rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </SheetClose>
          </div>
        </SheetHeader>
        
        <div className="py-2">
          <Timeline data={timelineData} />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default HistoryModal;
