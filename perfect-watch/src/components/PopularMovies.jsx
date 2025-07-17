import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";

export default function PopularMovies({ genresList }) {
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

  function handleFilter(e) {
    if (e.target.value === "clear") {
      setMovieFilterSwitch(0);
      return;
    }
    setMovieFilterSwitch(1);
    const filteredId = genresList.filter(
      (genre) => genre.name === e.target.value
    );
    console.log(filteredId[0].id);
    if (filteredId) {
      const filtered = popMovies.filter((movie) =>
        movie.genre_ids.includes(filteredId[0].id)
      );

      setFilteredMovies(filtered);
    }
  }

  return (
    <div className="text-center">
      <text>Todays Popular Movies</text>

      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1 ">
        {movieFilterSwitch == 0
          ? popMovies.map((movie_details) => (
              <li key={movie_details.id}>
                <ContentCard
                  movie_details={movie_details}
                  genres={genresList}
                />
              </li>
            ))
          : filteredMovies.map((movie_details) => (
              <li key={movie_details.id}>
                <ContentCard
                  movie_details={movie_details}
                  genres={genresList}
                />
              </li>
            ))}
      </ul>
    </div>
  );
}
