import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';

const token =
  import.meta.env.VITE_TMDB_TOKEN || process.env.REACT_APP_TMDB_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await api.get('/trending/movie/day');
  return data.results;
};

export const fetchMoviesByQuery = async query => {
  const { data } = await api.get('/search/movie', {
    params: {
      query,
    },
  });
  return data.results;
};

export const fetchMovieDetails = async movieId => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};

export const fetchMovieCredits = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async movieId => {
  const { data } = await api.get(`/movie/${movieId}/reviews`);
  return data.results;
};