"use client";
import React, { useEffect, useState } from "react";
import MovieCard from "../auth/MovieCard";
import { Movie } from "./BillBoard";

interface MovieListProps {
  title: string;
}

const getMoviesFromApi = async () => {
  const movie = await fetch("/api/movies");
  const response = await movie.json();
  return response;
};

const FavouritePlaylist: React.FunctionComponent<MovieListProps> = ({
  title,
}) => {
  const [movieData, setMovieData] = useState<[] | null>(null);
  useEffect(() => {
    const getMovies = async () => {
      const movies: any = await getMoviesFromApi();
      setMovieData(movies);
    };
    getMovies();
  }, []);

  if (!movieData) return;
  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {movieData.map((movie: Movie, idx) => {
            if (movie.favorite) return <MovieCard key={idx} data={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FavouritePlaylist;
