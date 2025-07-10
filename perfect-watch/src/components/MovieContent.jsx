import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../services/tmdb";

export default function MovieContent() {
  const [popMovies, setPopMovies] = useState([]);
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
  console.log(popMovies);
  return <>random movie content</>;
}
