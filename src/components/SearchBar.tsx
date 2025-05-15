
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
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          className="w-full pl-10 pr-12 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-tech-blue focus:border-transparent"
          placeholder="What Can I Help You?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <span className="text-xl">+</span>
        </div>
        <Button
          type="submit"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-tech-blue hover:bg-blue-600 text-white rounded-md px-2 py-1 text-sm"
        >
          <Search className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
