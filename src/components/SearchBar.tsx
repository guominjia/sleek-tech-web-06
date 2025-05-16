
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
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 rounded-xl blur-md opacity-75 -z-10 animate-pulse"></div>
      <form onSubmit={handleSubmit} className="relative">
        <Input
          className="w-full pl-14 pr-32 py-9 text-lg rounded-xl border-0 bg-white/80 backdrop-blur-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-violet-400 shadow-xl transition-all duration-200"
          placeholder="What can I help you with today?"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-violet-500">
          <span className="text-2xl font-bold">+</span>
        </div>
        <Button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-400 to-violet-400 hover:from-blue-500 hover:to-violet-500 text-white rounded-lg px-5 py-6 shadow-lg transition-all duration-200"
        >
          <Search className="h-5 w-5 mr-2" />
          <span>Search</span>
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
