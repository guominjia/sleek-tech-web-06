
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          className="w-full pl-12 pr-20 py-6 text-lg border-2 rounded-xl border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent shadow-sm"
          placeholder="What Can I Help You?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-tech-blue">
          <span className="text-2xl font-bold">+</span>
        </div>
        <Button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-tech-blue hover:bg-blue-600 text-white rounded-lg px-4 py-2"
        >
          <Search className="h-5 w-5 mr-1" />
          <span>Search</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
