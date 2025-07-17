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
    <div className="flex flex-center">
      <div className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1">
        <ul>
          {picks.map((movie) => (
            <li key={movie.id}>
              <PicksContentCard movie_details={movie} genres={genres} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
