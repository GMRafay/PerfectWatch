import { useEffect, useState } from "react";
import { fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";
import PopularMovies from "./PopularMovies";
import GenreContent from "./GenreContent";

export default function MovieContent({ setPicks, picks, setSelectedMovieId }) {
  const [genreDisplayed, setGenreDisplayed] = useState("popular");
  const [movieDataPage, setMovieDataPage] = useState(1);

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
    setMovieDataPage(1);
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
        <PopularMovies
          genresList={genres}
          setSelectedMovieId={setSelectedMovieId}
        />
      ) : (
        <GenreContent
          genre={genreDisplayed}
          genresList={genres}
          movieDataPage={movieDataPage}
          setMovieDataPage={setMovieDataPage}
          setSelectedMovieId={setSelectedMovieId}
        />
      )}
    </div>
  );
}
