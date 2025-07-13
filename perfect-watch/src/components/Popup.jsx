import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovieRecommendations,
  fetchSimilarMovies,
} from "../services/tmdb";

export function Popup({ movie_id }) {
  const [movieDetails, setMovieDetails] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [recommendations, setRecommendations] = useState();
  useEffect(() => {
    async function getMovieData() {
      try {
        const details = await fetchMovieDetails(movie_id);
        const similar = await fetchSimilarMovies(movie_id);
        const recommend = await fetchMovieRecommendations(movie_id);
        if (details) {
          setMovieDetails(details);
        }
        if (similar) {
          setSimilarMovies(similar);
        }
        if (recommend) {
          setRecommendations(recommend);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getMovieData();
  }, [movie_id]);

  return (
    <div className="bg-white border-white rounded-xl z-3 fixed top-25 bottom-100 sm:w-10 sm:h-10 md:w-200 md:h-180 overscroll-auto  md:overscroll-contain">
      <div className="flex flex-col">
        <img src=""></img>
      </div>
    </div>
  );
}
