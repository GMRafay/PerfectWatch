import { useEffect, useState } from "react";
import {
  fetchMovieDetails,
  fetchMovieRecommendations,
  fetchSimilarMovies,
} from "../services/tmdb";

export function Popup({ movie_id, setDisplayPopup }) {
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

  const baseImgUrl = "http://image.tmdb.org/t/p/original";
  const fullImgUrl = baseImgUrl + movieDetails.poster_path;
  console.log("this is the movie details below");
  console.log(movieDetails);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white w-[90%] max-w-2xl h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6">
        <button onClick={() => setDisplayPopup(false)}>Go Back</button>
        <div className="flex flex-col items-center">
          <img
            src={fullImgUrl}
            alt={movieDetails.title}
            className="w-full max-w-xs rounded-md mb-4 object-cover"
          />
          <h2 className="text-xl font-bold mb-2">{movieDetails.title}</h2>
          <p className="text-sm text-gray-700">{movieDetails.overview}</p>
          {/* Add more details below */}
        </div>
      </div>
    </div>
  );
}
