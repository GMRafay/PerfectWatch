import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";

export default function MovieContent() {
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

  const [genres, setGenres] = useState([]);
  useEffect(() => {
    async function getGenres() {
      try {
        const movie_genres = await fetchGenres();
        console.log(`trying to get movie_genres which are ${movie_genres}`);
        setGenres(movie_genres);
      } catch (err) {
        console.log(err);
      }
    }
    getGenres();
  }, []);
  console.log(popMovies);
  return (
    <div>
        <ul>
            {popMovies.map((movie_details) => (
                <li><ContentCard movie_details={movie_details} genres={genres}/></li>
            ))}
        </ul>
    </div>
  );
}
