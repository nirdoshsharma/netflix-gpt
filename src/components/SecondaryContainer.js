import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.addNowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-60 pl-12 relative z-20">
          <MovieList
            title={"Now Palying"}
            movies={movies.addNowPlayingMovies}
          />
          <MovieList title={"Top Rated"} movies={movies.addTopRatedMovies} />
          <MovieList
            title={"Popular Movies"}
            movies={movies.addPopularMovies}
          />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.addUpCommingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
