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
    <div className="flex ">
      <div>
        <img className="h-50" src={baseImgUrl + poster_path} />
        {genres && genreNames.map((genre) => <div>{genre.name}</div>)}
      </div>
    </div>
  );
}
