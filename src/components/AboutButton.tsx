
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const AboutButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center gap-1"
        onClick={() => setOpen(true)}
      >
        <Info className="h-4 w-4" />
        <span>About</span>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-tech-blue text-xl">Smart Work Assistant</DialogTitle>
            <DialogDescription className="text-center">
              Your AI-powered productivity companion
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <p>
              Smart Work Assistant uses advanced AI technology to help professionals streamline their workflow,
              organize tasks, and boost productivity. Our platform leverages machine learning algorithms
              to provide personalized assistance tailored to your needs.
            </p>
            <p>
              With features like intelligent search, report generation, and historical data analysis,
              Smart Work Assistant transforms the way you work and helps you achieve more in less time.
            </p>
            <p className="text-sm text-muted-foreground text-center pt-4">
              © 2025 Smart Work Assistant. All rights reserved.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AboutButton;
