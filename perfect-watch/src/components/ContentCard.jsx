import { useEffect, useState } from "react";
import { fetchGenres } from "../services/tmdb.js";
export default function ContentCard({ movie_details, genres }) {
  const {
    id,
    genre_ids,
    original_language,
    title,
    overview,
    popularity,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movie_details;

  let genreNames = [];
  if (genres) {
    genreNames = genres.filter((genre) => genre_ids.includes(genre.id));
  }

  const baseImgUrl = "http://image.tmdb.org/t/p/original";
  return (
    <div className="flex flex-col justify-center items-center border border-black rounded-xl m-5 bg-white shadow-2xl">
      <img
        className=" w-full border rounded-t-xl"
        src={baseImgUrl + poster_path}
      />
      <div className="flex flex-row flex-wrap ">
        {genres &&
          genreNames.map((genre) => (
            <div className="m-2 border rounded-xl p-1 background bg-indigo-200 text-black">
              {genre.name}
            </div>
          ))}
      </div>
    </div>
  );
}
