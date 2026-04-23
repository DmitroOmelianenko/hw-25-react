import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/getImageUrl';
import css from './MovieCard.module.css';

export default function MovieCard({ movie, location }) {
  return (
    <Link to={`/movies/${movie.id}`} state={{ from: location }} className={css.card}>
      <img
        src={getImageUrl(movie.poster_path)}
        alt={movie.title}
        className={css.image}
      />
      <h3 className={css.title}>{movie.title}</h3>
    </Link>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }).isRequired,
  location: PropTypes.object,
};