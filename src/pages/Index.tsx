
import React, { useState } from "react";
import Logo from "@/components/Logo";
import SearchBar from "@/components/SearchBar";
import ActionButtons from "@/components/ActionButtons";
import QueryDisplay from "@/components/QueryDisplay";
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
    <div className="min-h-screen bg-tech-bg flex flex-col">
      {/* Header with Logo */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <Logo />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
          <div className="space-y-6">
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
      <footer className="bg-white py-4 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          © 2025 Smart Work Assistant. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
