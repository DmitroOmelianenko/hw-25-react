import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import css from './MovieList.module.css';

export default function MovieList({ movies, location }) {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          <MovieCard movie={movie} location={location} />
        </li>
      ))}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.object,
};