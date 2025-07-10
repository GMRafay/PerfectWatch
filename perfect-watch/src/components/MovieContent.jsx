import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";

export default function MovieContent() {
  const [popMovies, setPopMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFilterSwitch, setMovieFilterSwitch] = useState(0);
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

  function handleFilter(e) {
    if (e.target.value === "clear") {
      setMovieFilterSwitch(0);
      return;
    }
    setMovieFilterSwitch(1);
    const filteredId = genres.filter((genre) => genre.name === e.target.value);
    console.log(filteredId[0].id);
    if (filteredId) {
      console.log("reached the filter checking");
      const filtered = popMovies.filter((movie) =>
        movie.genre_ids.includes(filteredId[0].id)
      );
      console.log(`${filtered} these are the filtered movies`);
      setFilteredMovies(filtered);
    }
    console.log(e.target.value);
  }
  console.log(popMovies);
  return (
    <div className="text-center">
      Todays Popular Movies
      <label>
        Filter movie by Genre
        <select
          className="m-5"
          name="genre_filter"
          id="genre_filter"
          onChange={(e) => handleFilter(e)}
        >
          <option key="21" value="clear">
            Clear Filters
          </option>
          {genres.map((genre) => (
            <option key={genre.id} value={genres.name}>
              {" "}
              {genre.name}
            </option>
          ))}
        </select>
      </label>
      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1 ">
        {movieFilterSwitch == 0
          ? popMovies.map((movie_details) => (
              <li key={movie_details.id}>
                <ContentCard movie_details={movie_details} genres={genres} />
              </li>
            ))
          : filteredMovies.map((movie_details) => (
              <li key={movie_details.id}>
                <ContentCard movie_details={movie_details} genres={genres} />
              </li>
            ))}
      </ul>
    </div>
  );
}
