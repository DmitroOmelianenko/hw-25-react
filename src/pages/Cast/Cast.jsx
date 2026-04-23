import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/tmdbApi';
import { getImageUrl } from '../../utils/getImageUrl';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCast();
  }, [movieId]);

  if (cast.length === 0) return <p>No cast information.</p>;

  return (
    <ul className={css.list}>
      {cast.map(actor => (
        <li key={actor.cast_id || actor.id} className={css.item}>
          <img
            src={getImageUrl(actor.profile_path)}
            alt={actor.name}
            className={css.image}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}