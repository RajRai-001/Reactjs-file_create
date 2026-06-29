import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}

        <div>

          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

            📸 Photo Gallery

          </h1>

          <p className="text-sm text-gray-300 mt-1">

            Explore beautiful high quality images

          </p>

        </div>

        {/* Right Side */}

        <div className="hidden md:flex gap-4 items-center">

  <div className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 font-semibold">
    🌍 Explore
  </div>

  <div className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400 text-blue-300 font-semibold">
    📸 Free Images
  </div>

</div>

      </div>

    </nav>
  );
};

export default Navbar;