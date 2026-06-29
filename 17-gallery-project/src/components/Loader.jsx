import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh]">

      {/* Spinner */}
      <div className="relative">

        <div
          className="
          w-20
          h-20
          rounded-full
          border-[6px]
          border-cyan-500/20
        "
        ></div>

        <div
          className="
          absolute
          top-0
          left-0
          w-20
          h-20
          rounded-full
          border-[6px]
          border-transparent
          border-t-cyan-400
          border-r-blue-500
          animate-spin
        "
        ></div>

      </div>

      {/* Loading Text */}

      <h2 className="mt-8 text-2xl font-semibold text-cyan-300 animate-pulse">
        Loading Images...
      </h2>

      <p className="text-gray-400 mt-2">
        Please wait while we fetch beautiful photos.
      </p>

    </div>
  );
};

export default Loader;