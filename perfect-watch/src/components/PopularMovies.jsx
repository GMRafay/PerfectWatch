import { useEffect, useState } from "react";
import { fetchPopularMovies, fetchGenres } from "../services/tmdb";
import ContentCard from "./ContentCard";
import { Popup } from "./Popup";
export default function PopularMovies({ genresList, setPicks, picks }) {
  const [popMovies, setPopMovies] = useState([]);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState("");

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

  function handlePopup(movie_id) {
    setDisplayPopup(true);
    setSelectedMovieId(movie_id);
  }

  return (
    <div className="flex flex-col items-center">
      <text>Todays Popular Movies</text>
        {displayPopup && <Popup movie_id={selectedMovieId} setDisplayPopup={setDisplayPopup} setPicks={setPicks} picks={picks}/>}
      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1 ">
        {popMovies.map((movie_details) => (
          <li key={movie_details.id}>
            <button onClick={() => handlePopup(movie_details.id)}>
              <ContentCard movie_details={movie_details} genres={genresList} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
