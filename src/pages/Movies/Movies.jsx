import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from '../../services/api';
import css from './Movies.module.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (!query) return;
    fetchSearchMovies(query).then(setMovies);
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: text });
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>

      <ul className={css.list}>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;