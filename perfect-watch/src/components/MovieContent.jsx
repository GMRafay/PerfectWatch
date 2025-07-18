import { useEffect, useState } from "react";
import { fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";
import PopularMovies from "./PopularMovies";
import GenreContent from "./GenreContent";
import { motion, AnimatePresence } from "framer-motion";
export default function MovieContent({ setSelectedMovieId }) {
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
      <AnimatePresence mode="wait">
        {genreDisplayed == "popular" ? (
          <motion.div
            key="popular"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <PopularMovies
              genresList={genres}
              setSelectedMovieId={setSelectedMovieId}
            />
          </motion.div>
        ) : (
          <motion.div
            key={genreDisplayed}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <GenreContent
              genre={genreDisplayed}
              genresList={genres}
              movieDataPage={movieDataPage}
              setMovieDataPage={setMovieDataPage}
              setSelectedMovieId={setSelectedMovieId}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
