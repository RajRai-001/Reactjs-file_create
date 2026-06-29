import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <div className="relative">

        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.3-4.3m1.3-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>

        {/* Input */}
        <input
          type="text"
          placeholder="Search by author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          pl-14
          pr-5
          py-4
          rounded-2xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          text-white
          placeholder:text-gray-400
          outline-none
          focus:border-cyan-400
          focus:ring-2
          focus:ring-cyan-400/40
          transition-all
          duration-300
          "
        />

      </div>

    </div>
  );
};

export default SearchBar;