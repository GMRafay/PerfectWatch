import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/tmdb";
import ContentCard from "./ContentCard";
import { Popup } from "./Popup";
export default function PopularMovies({ genresList, setSelectedMovieId }) {
  const [popMovies, setPopMovies] = useState([]);

  useEffect(() => {
    const fetchPopular = async () => {
      try {
        const movies = await fetchPopularMovies();

        setPopMovies(movies);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPopular();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <text className="mb-5 font-bold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-indigo-800 to-indigo-400 ">
        Todays Popular Movies
      </text>
      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1 ">
        {popMovies.map((movie_details) => (
          <li key={movie_details.id}>
            <button onClick={() => setSelectedMovieId(movie_details.id)}>
              <ContentCard movie_details={movie_details} genres={genresList} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
