import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { featchMovieDetailsById } from '../components/Api/Api';
import Details from '../components/Details/Details';
import ReturnButton from '../components/ReturnButton/ReturnButton';
import AdditionalInfo from '../components/AdditionalInfo/AdditionalInfo';

const MovieDetails = () => {
  const [movieDetailsID, setMovieDetailsID] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getMovieDetails() {
      try {
        const getMovieInf = await featchMovieDetailsById(movieId);
        setMovieDetailsID(getMovieInf);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieDetails();
  }, [movieId]);

  if (!movieDetailsID) {
    return;
  }

  return (
    <>
      <ReturnButton locationBack={backLinkLocationRef.current} />
      <Details movieDetailsID={movieDetailsID} />
      <AdditionalInfo />
      <Suspense fallback={<div>Loading..</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;