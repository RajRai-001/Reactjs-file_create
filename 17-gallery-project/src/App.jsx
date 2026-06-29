import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Pagination from "./components/Pagination";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch Images
  const getPhotos = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=16`
      );

      setPhotos(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [page]);

  // Search Button
  const handleSearch = () => {
    const value = search.trim();

    // Empty input
    if (value === "") return;

    // If number → Jump to page
    if (!isNaN(value)) {
      const pageNumber = Number(value);

      if (pageNumber >= 1) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

        setPage(pageNumber);
        setSearch("");
      }
    }

    // If text
    // Don't do anything.
    // filteredPhotos automatically filters authors.
  };

  // Filter Authors
  const filteredPhotos = photos.filter((photo) =>
    photo.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black to-slate-950 text-white">

      <Navbar />

      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />

      <div className="max-w-7xl mx-auto px-6 pb-10">

        {loading ? (

          <Loader />

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

            {filteredPhotos.length > 0 ? (

              filteredPhotos.map((photo) => (
                <Card
                  key={photo.id}
                  photo={photo}
                />
              ))

            ) : (

              <div className="col-span-full text-center mt-20">

                <h2 className="text-3xl font-bold">
                  No Images Found 😢
                </h2>

                <p className="text-gray-400 mt-2">
                  Try another author name.
                </p>

              </div>

            )}

          </div>

        )}

      </div>

      <Pagination
        page={page}
        setPage={setPage}
      />

      <footer className="text-center py-6 text-gray-400 border-t border-white/10">
        <p>© 2026 Photo Gallery | Built by Raj Rai</p>
      </footer>

    </div>
  );
};

export default App;