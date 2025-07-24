import PicksContentCard from "./PicksContentCard";
import { useEffect, useState } from "react";
import { fetchGenres } from "../services/tmdb";
export default function Picks({ picks }) {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function getGenres() {
      try {
        const movie_genres = await fetchGenres();

        setGenres(movie_genres);
      } catch (err) {
        console.log(err);
      }
    }
    getGenres();
  }, []);
  console.log("picks below");
  console.log(picks);
  return (
    <div className="flex items-center flex-col">
      <text className="m-5 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-400 ">
        Your Picks
      </text>
      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1">
        {picks.map((movie) => (
          <li key={movie.id}>
            <PicksContentCard movie_details={movie} genres={genres} />
          </li>
        ))}
      </ul>
      {picks.length == 0 && (
        <p className="w-full h-screen flex items-center justify-center ">
          Go to the movies tab to add some movies to your picks!
        </p>
      )}
    </div>
  );
}
