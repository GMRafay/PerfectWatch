import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";
import PopularMovies from "./PopularMovies";
import GenreContent from "./GenreContent";

export default function MovieContent() {
  const [genreDisplayed, setGenreDisplayed] = useState("popular");

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

  function handleGenreSwitch(e) {
    setGenreDisplayed(e.target.value);
    
  }

  return (
    <div>
      <label>
        Search movies by genre
        <select onChange={(e) => handleGenreSwitch(e)}>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>
      </label>
      {genreDisplayed == "popular" ? (
        <PopularMovies genresList={genres} />
      ) : (
        <GenreContent genre={genreDisplayed} genresList={genres} />
      )}
    </div>
  );
}
