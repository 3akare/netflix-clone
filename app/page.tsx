import { memo } from "react";
import NavBar from "@/app/components/NavBar";
import BillBoard from "./components/BillBoard";
import MovieList from "./components/MovieList";
import FavouritePlaylist from "./components/FavouritePlaylist";

function Home() {
  return (
    <main>
      <NavBar />
      <BillBoard />
      <div className="pb-40">
        <MovieList title="Trending Now" />
      </div>
      <div className="pb-40">
        <FavouritePlaylist title="Playlist" />
      </div>
    </main>
  );
}

export default memo(Home);
