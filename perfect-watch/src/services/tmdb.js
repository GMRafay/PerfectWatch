import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    accept: "application/json",
  },
});

export const fetchPopularMovies = async () => {
  const res = await tmdb.get("/movie/popular?language=en-US&page=1");
  return res.data.results;
};

export const fetchGenres = async () => {
  const res = await tmdb.get("/genre/movie/list?language=en-US");
  return res.data.genres;
};
