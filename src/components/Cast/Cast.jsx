import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { featchMovieCredits } from '../Api/Api';
import { CastList, CastItem } from './Cast.styled';
import photo from '../../images/img-not-found-small.png';

const Cast = () => {
  const [movieCast, setMovieCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function getMovieCast() {
      try {
        const getMovieCast = await featchMovieCredits(movieId);
        setMovieCast(getMovieCast.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCast();
  }, [movieId]);

  if (!movieCast) {
    return;
  }

  return movieCast.length > 0 ? (
    <CastList>
      {movieCast.map(({ id, name, character, profile_path }) => (
        <CastItem key={id}>
          {
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : photo
              }
              alt={name}
              width="180"
              height="auto"
            />
          }
          <div>
            <p>
              <b>{name}</b>
            </p>
            <p>
              Character: <b>{character}</b>
            </p>
          </div>
        </CastItem>
      ))}
    </CastList>
  ) : (
    <p
      style={{
        fontSize: 22,
        fontWeight: 700,
        color: '000000',
      }}
    >
      No information about cast yet...
    </p>
  );
};
export default Cast;