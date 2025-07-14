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
  let similarMoviePosters = [];
  similarMovies.map((movie) => {
    similarMoviePosters.push(baseImgUrl + movie.poster_path);
  });

  const fullImgUrl = baseImgUrl + movieDetails.poster_path;
  function handleClick(index) {
    setExpanded(index);
  }
  const [expanded, setExpanded] = useState(0);
  console.log(similarMoviePosters);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center ">
      <div className="bg-white w-[90%] max-w-2xl h-[80vh] overflow-y-auto rounded-lg shadow-lg p-6">
        <button className="fixed z-51" onClick={() => setDisplayPopup(false)}>
          Go Back
        </button>
        <div className="flex flex-col items-center">
          <img
            src={fullImgUrl}
            alt={movieDetails.title}
            className="w-full max-w-xs rounded-md mb-4 object-cover"
          />
          <div className="flex flex-row-reverse justify-around ">
            <h2 className="text-xl font-bold mb-2 order-2 ">
              {movieDetails.title}
            </h2>
            <h2 className="text-xl font-bold mb-2 ml-10">
              {movieDetails.release_date}
            </h2>
          </div>
          <p className="text-sm text-gray-700">{movieDetails.overview}</p>
          <text className="m-5">Similar Movies: </text>
          <div className="w-full h-100 overflow-hidden flex items-center justify-center gap-2">
            {similarMoviePosters.map((moviePosterPath, index) => (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className={`h-full rounded-2xl bg-black cursor-pointer transition-all duration-500 ease-in-out ${
                  expanded === index
                    ? "w-[70%]"
                    : "w-[3.68%] overflow-hidden block"
                }`}
              >
                <img
                  src={moviePosterPath}
                  className="w-full h-full overflow-hidden rounded-2xl object-cover"
                ></img>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
