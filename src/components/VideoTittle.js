import React from "react";

const VideoTittle = ({ tittle, overview }) => {
  return (
    <div className="w-screen aspect-video pt-80 px-24 absolute  bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold text-white">{tittle}</h1>
      <p className="text-sm py-6 w-1/3 text-white ">{overview}</p>
      <div className="">
        <button class="bg-white text-black font-bold py-2 px-6 rounded-md shadow-lg hover:bg-gray-300 hover:scale-105 transition-transform">
          ▶ Play
        </button>

        <button class="bg-transparent border border-gray-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-500 hover:border-gray-400 hover:text-black transition-colors m-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
