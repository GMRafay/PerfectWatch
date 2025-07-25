import axios from "axios";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    accept: "application/json",
  },
});

export const fetchPopularMovies = async () => {
  const res = await tmdb.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&certification_country=US&certification.lte=R&without_keywords=159551&primary_release_date.gte=1995-01-01`
  );
  return res.data.results;
};

export const fetchGenres = async () => {
  const res = await tmdb.get("/genre/movie/list?language=en-US");
  return res.data.genres;
};

export const fetchMoviesByGenre = async (genre, page = 1) => {
  const res = await tmdb.get(
    `/discover/movie?include_adult=false&include_video=false&certification.lte=R&language=en-US&page=${page}&with_genres=${genre}&sort_by=popularity.desc&certification.lte=R&without_keywords=159551&primary_release_date.gte=1995-01-01`
  );
  return res.data.results;
};

export const fetchMovieRecommendations = async (movie_id) => {
  const res = await tmdb.get(
    `/movie/${movie_id}/recommendations?language=en-US&page=1&certification.lte=R`
  );

  return res.data.results;
};

export const fetchMovieReviews = async (movie_id) => {
  const res = await tmdb.get(
    `/movie/${movie_id}/reviews?language=en-US&page=1`
  );

  return res.data.results;
};

export const fetchSimilarMovies = async (movie_id) => {
  const res = await tmdb.get(
    `/movie/${movie_id}/similar?language=en-US&page=1&certification.lte=R`
  );

  return res.data.results;
};

export const fetchMovieDetails = async (movie_id) => {
  const res = await tmdb.get(`/movie/${movie_id}?language=en-US`);
  return res.data;
};
