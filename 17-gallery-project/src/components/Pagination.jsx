import React from "react";

const Pagination = ({ page, setPage }) => {

  const handlePrevious = () => {
    if (page === 1) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setPage(page - 1);
  };

  const handleNext = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setPage(page + 1);
  };

  return (
    <div className="flex justify-center items-center gap-6 py-10">

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        disabled={page === 1}
        className={`px-6 py-3 rounded-full font-semibold transition-all duration-300

        ${
          page === 1
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
        }
        `}
      >
        ← Previous
      </button>

      {/* Page Number */}
      <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg">
        <span className="font-bold text-lg">
          Page {page}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="px-6 py-3 rounded-full font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95 transition-all duration-300"
      >
        Next →
      </button>
      

    </div>
  );
};

export default Pagination;