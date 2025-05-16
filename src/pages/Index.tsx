
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
      <header className="bg-white/80 backdrop-blur-sm shadow-lg py-6 relative z-10 border-b border-blue-100">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="animate-fade-in">
            <Logo />
          </div>
          <AboutButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-12 md:py-16 relative z-10">
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden p-10 border border-blue-100">
            <div className="space-y-10">
              {/* Search Bar */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Ask Smart Work Assistant</h2>
                <SearchBar onSearch={handleSearch} />
              </div>

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
