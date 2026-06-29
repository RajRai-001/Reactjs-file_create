import React from "react";

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">

      <div className="flex gap-4">

        <input
          type="text"
          placeholder="Search author or enter page number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
          className="flex-1 pl-5 pr-5 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-gray-400 outline-none focus:border-cyan-400"
        />

        <button
          onClick={handleSearch}
          className="px-8 rounded-2xl bg-cyan-500 hover:bg-cyan-600 font-semibold"
        >
          Search
        </button>

      </div>

    </div>
  );
};

export default SearchBar;