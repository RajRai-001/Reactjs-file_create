import React from "react";

const Card = ({ photo }) => {
  return (
    <div
      className="
      group
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      rounded-3xl
      overflow-hidden
      shadow-xl
      hover:shadow-cyan-500/40      hover:-translate-y-2
      transition-all
      duration-700
      "
    >
      {/* Image */}

      <div className="overflow-hidden">
        <img
          src={photo.download_url}
          alt={photo.author}
          className="
          w-full
          h-72
          object-cover
          group-hover:scale-110
          transition-transform
          duration-700
          "
        />
      </div>

      {/* Content */}

      <div className="p-5">

        {/* Author */}

        <h2 className="text-xl font-bold text-white truncate">
          👤 {photo.author}
        </h2>

        <p className="text-gray-300 mt-2">
          Image ID : {photo.id}
        </p>

        <div className="border-t border-white/20 my-5"></div>

        {/* Buttons */}

        <div className="flex gap-3">

          <a
            href={photo.url}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            text-center
            bg-cyan-500
            hover:bg-cyan-600
            py-2.5
            rounded-xl
            font-semibold
            transition
            "
          >
            👁 View
          </a>

          <a
            href={photo.download_url}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1
            text-center
            bg-blue-600
            hover:bg-blue-700
            py-2.5
            rounded-xl
            font-semibold
            transition
            "
          >
            ⬇ Download
          </a>

        </div>

      </div>
    </div>
  );
};

export default Card;