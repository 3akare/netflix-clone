import Image from "next/image";
import React from "react";

import { Movie } from "../components/BillBoard";

import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
interface MovieCardProps {
  data: Movie;
}
const MovieCard: React.FunctionComponent<MovieCardProps> = ({ data }) => {
  const { thumbnailUrl } = data;
  return (
    <div className="group bg-zinc-900 col-span-1 relative h-[12vw]">
      <Image
        src={thumbnailUrl}
        alt="thumbnailUrl"
        layout="fill"
        objectFit="cover"
        className="cursor-pointer object-cover transition shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 w-full h-[12vw]"
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible size-full scale-0 group-hover:scale-110 group-hover:translate-x-[2vw] group-hover:-translate-y-[6vw] group-hover:opacity-100">
        <Image
          src={thumbnailUrl}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
          className="cursor-pointer object-cover transition shadow-xl rounded-t-md w-full h-[12vw]"
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 -bottom-40 absolute w-full shadow-md transition rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              onClick={() => {}}
              className="cursor-pointer size-6 lg:size-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <BsFillPlayFill size={20} />
            </div>
            <div
              onClick={() => {
                alert("Added to Favourites");
              }}
              className="cursor-pointer size-6 lg:size-10 bg-white rounded-full flex justify-center items-center transition hover:bg-neutral-300"
            >
              <AiOutlinePlus size={20} />
            </div>
          </div>
          <p className="text-green-400 font-semibold mt-4">
            New <span className="text-white">2024</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.duration}</p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
