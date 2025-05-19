
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { timelineData } from "@/data/timelineData";
import { X } from "lucide-react";
import TimelineVertical from "./TimelineVertical";

interface HistoryModalProps {
  open: boolean;
  onClose: () => void;
}

const HistoryModal: React.FC<HistoryModalProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent className="w-[90vw] max-w-[900px] h-[80vh] bg-white/80 backdrop-blur-md border border-blue-100">
        <DialogHeader className="mb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">历史记录</DialogTitle>
            <DialogClose onClick={onClose} className="p-1 rounded-full hover:bg-blue-50 transition-colors">
              <X className="h-5 w-5 text-gray-500" />
            </DialogClose>
          </div>
        </DialogHeader>
        
        <div className="flex justify-center h-[calc(100%-60px)] overflow-y-auto">
          <TimelineVertical data={timelineData} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default HistoryModal;
