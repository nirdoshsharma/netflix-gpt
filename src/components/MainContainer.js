import React from "react";
import { useSelector } from "react-redux";
import VideoTittle from "./VideoTittle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.addNowPlayingMovies);
  if (movies == null) return;
  const mainMovie = movies[0];

  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      MainContainer
      <VideoTittle tittle={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
