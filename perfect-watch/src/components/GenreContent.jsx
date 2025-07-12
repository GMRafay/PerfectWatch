import { useState, useEffect } from "react";
import { fetchMoviesByGenre } from "../services/tmdb";
import ContentCard from "./ContentCard";

export default function GenreContent({
  genre,
  genresList,
  movieDataPage,
  setMovieDataPage,
}) {
  const [moviesList, setMoviesList] = useState([]);

  const genreId = genresList.filter((genreItem) => genreItem.name == genre)[0]
    .id;
  useEffect(() => {
    async function getMoviesByGenre(genreId, movieDataPage) {
      try {
        const movies = await fetchMoviesByGenre(genreId, movieDataPage);
        if (movieDataPage == 1) {
          console.log(movies);
          setMoviesList(movies);
        } else {
          setMoviesList((prev) => [...prev, ...movies]);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getMoviesByGenre(genreId, movieDataPage);
  }, [genreId, movieDataPage]);

  function handleShowMore() {
    const currPage = movieDataPage;
    setMovieDataPage(currPage + 1);
  }
  return (
    <div className="flex flex-col items-center">
      <ul className="grid lg:grid-cols-5 lg:grid-rows-4 md:grid-cols-3 sm:grid-cols-1 ">
        {moviesList.map((movie) => (
          <li key={movie.id}>
            <ContentCard movie_details={movie} genres={genresList} />
          </li>
        ))}
      </ul>
      <button
        className="border border-white bg-white rounded-xl text-indigo-400 p-5 m-5"
        onClick={() => handleShowMore()}
      >
        {" "}
        Show More
      </button>
    </div>
  );
}
