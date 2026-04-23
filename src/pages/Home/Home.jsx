import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/tmdbApi';
import css from './Home.module.css';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, []);

  return (
    <section className={css.section}>
      <h1 className={css.title}>Trending today</h1>
      <MovieList movies={movies} location={location} />
    </section>
  );
}