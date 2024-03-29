"use client";
import { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

export interface Movie {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
  description: string;
  duration?: string;
  genre?: string;
  favorite?: boolean;
}

const getBillboardMovie = async () => {
  const movie = await fetch("/api/movie");
  const response = await movie.json();
  return response;
};

const BillBoard = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const getMovie = async () => {
      const movieData = await getBillboardMovie();
      setMovie(movieData);
    };
    getMovie();
  }, []);

  if (!movie) {
    return;
  }

  return (
    <div className="relative h-[56.25vh]">
      <video
        className="w-full h-[56.25vh] object-cover brightness-[60%]"
        src={movie.videoUrl}
        poster={movie.thumbnailUrl}
        autoPlay
        muted
        loop
      ></video>
      <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
        <p className="text-white text-1xl md:text-5xl h-full w-1/2 lg:text-6xl font-bold drop-shadow-xl">
          {movie.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {movie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition gap-1">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
