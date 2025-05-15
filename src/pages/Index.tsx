
import React, { useState } from "react";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import ActionButtons from "@/components/ActionButtons";
import QueryDisplay from "@/components/QueryDisplay";
import Background from "@/components/Background";
import AboutButton from "@/components/AboutButton";
import { toast } from "sonner";

const Index = () => {
  const [query, setQuery] = useState("");
  const [selectedWeek, setSelectedWeek] = useState("WW10");

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    toast.success("Query submitted successfully");
  };

  const handleGenerateReport = () => {
    toast.info("Generating report...");
    // Implementation would go here in a real app
  };

  const handleViewHistory = () => {
    toast.info("Opening history view...");
    // Implementation would go here in a real app
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background */}
      <Background />

      {/* Header with Logo and About button */}
      <header className="bg-white/80 backdrop-blur-sm shadow-md py-5 relative z-10 border-b border-blue-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="animate-fade-in">
            <Logo />
          </div>
          <AboutButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-10 md:py-16 flex flex-col items-center relative z-10">
        <div className="w-full max-w-4xl mx-auto bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden p-8 md:p-10 border border-blue-50">
          <div className="space-y-8">
            {/* Search Bar */}
            <SearchBar onSearch={handleSearch} />

            {/* Action Buttons */}
            <ActionButtons
              onGenerateReport={handleGenerateReport}
              onViewHistory={handleViewHistory}
              selectedWeek={selectedWeek}
              onWeekChange={setSelectedWeek}
            />

            {/* Query Display */}
            <QueryDisplay selectedWeek={selectedWeek} query={query} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-4 border-t border-gray-200 relative z-10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2025 Smart Work Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
