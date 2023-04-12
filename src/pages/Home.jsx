import { useState, useEffect } from 'react';
import { fetchTrendsFilms } from '../components/Api/Api';
import MoviesList from '../components/MoviesList/MoviesList';

const Home = () => {
  const [movieTrend, setMovieTrend] = useState([]);

  useEffect(() => {
    async function getMovieTrend() {
      try {
        const makeMovieList = await fetchTrendsFilms();
        setMovieTrend(makeMovieList.results);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieTrend();
  }, []);

  return <MoviesList movies={movieTrend} titlePage={'Trending today'} />;
};

export default Home;