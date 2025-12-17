import { useState, useEffect } from "react";
import { CardContainer } from "../components/Home/CardContainer";
import { Loader } from "../components/assets/Loader";

export const Home = () => {

  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const APIkey = `269615d5c201f031cd098191b590c560`;

    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        console.log(data.results);
        setPopularMovies(data.results);
      }
      catch (error) {
        console.log("Fetch error:", error);
        setError(true);
      }
    };

    const fetchGenres = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${APIkey}&language=en-US`)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setLoading(false)
        console.log(data.genres)
        setGenres(data.genres)
      } catch (error) {
        console.log("Fetch error:", error);
        setError(true);
      }
    }

    fetchPopularMovies();
    fetchGenres();
  }, [])

  return (
    <>
      <h1>Movies</h1>
      {loading && <Loader />}
      {error && <p>Data is unavailable right now. Try again later!</p>}
      <CardContainer popularMovies={popularMovies} />
    </>
  )
}
