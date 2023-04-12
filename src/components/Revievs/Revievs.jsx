import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { featchMovieReviews } from '../Api/Api';
import css from './Revievs.module.css';

const Reviews = () => {
  const [movieReviews, setMovieReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieReviews() {
      try {
        const getMovieReviews = await featchMovieReviews(movieId);
        setMovieReviews(getMovieReviews.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);

  if (!movieReviews) {
    return;
  }

  return movieReviews.length > 0 ? (
    <ul className={css.list}>
      {movieReviews.map(({ author, content }) => (
        <li key={author}>
          <p>
            <b>{author}</b>
          </p>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p className={css.norevs}>
      {' '}
      No reviews yet...
    </p>
  );
};

export default Reviews;