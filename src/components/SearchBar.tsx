
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
    <div className="relative w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          className="w-full pl-14 pr-24 py-8 text-lg border-2 rounded-xl border-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-md"
          placeholder="What can I help you with today?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-blue-500">
          <span className="text-2xl font-bold">+</span>
        </div>
        <Button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5"
        >
          <Search className="h-5 w-5 mr-2" />
          <span>Search</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
