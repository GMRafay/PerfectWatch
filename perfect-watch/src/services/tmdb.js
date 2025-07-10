import axios from "axios";



const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization: `Bearer ${import.meta.env.TMDB_ACCESS_TOKEN}`,
    accept: 'application/json',
  },
});

export const fetchPopularMovies = async () => {
  const res = await tmdb.get('/movie/popular');
  return res.data.results;
};
