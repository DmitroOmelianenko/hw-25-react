import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/api';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(data => setCast(data.cast || []));
  }, [movieId]);

  return (
    <div className={css.container}>
      <h2>Cast</h2>
      <ul className={css.list}>
        {cast.map(actor => (
          <li key={actor.id}>
            {actor.name} - {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cast;