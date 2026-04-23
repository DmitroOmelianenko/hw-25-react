import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/tmdbApi';
import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    getReviews();
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <ul className={css.list}>
      {reviews.map(review => (
        <li key={review.id} className={css.item}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}