import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MovieList from '../../components/MovieList/MovieList';
import { fetchMoviesByQuery } from '../../services/tmdbApi';
import css from './Movies.module.css';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('query') ?? '';
  const [inputValue, setInputValue] = useState(query);

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const data = await fetchMoviesByQuery(query);
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovies();
  }, [query]);

  const handleSubmit = event => {
    event.preventDefault();

    const trimmedValue = inputValue.trim();

    if (!trimmedValue) return;

    setSearchParams({ query: trimmedValue });
  };

  return (
    <section className={css.section}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          className={css.input}
          placeholder="Search movie..."
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} location={location} />}
    </section>
  );
}