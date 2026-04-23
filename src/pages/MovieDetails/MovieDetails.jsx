import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieDetails } from '../../services/tmdbApi';
import { getImageUrl } from '../../utils/getImageUrl';
import css from './MovieDetails.module.css';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBackLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovie();
  }, [movieId]);

  if (!movie) return <p>Loading movie...</p>;

  const { title, poster_path, vote_average, overview, genres } = movie;

  return (
    <section className={css.section}>
      <Link to={goBackLink.current} className={css.backLink}>
        Go back
      </Link>

      <div className={css.wrapper}>
        <img
          src={getImageUrl(poster_path)}
          alt={title}
          className={css.image}
        />

        <div>
          <h1>{title}</h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>

      <div className={css.additional}>
        <h3>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </div>

      <Outlet />
    </section>
  );
}