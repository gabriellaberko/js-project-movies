import { useState, useEffect } from "react";
import { Home } from "./pages/Home";
import { Genre } from "./pages/Genre";
import { MovieDetails } from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    background-color: ${({ theme }) => theme.colors.bg};;
    color: ${({ theme }) => theme.colors.text};
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
`;

export const App = () => {

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
    <BrowserRouter>
      <GlobalStyles></GlobalStyles>
      <main>
        <Routes>
          <Route path="/" element={<Home popularMovies={popularMovies} genres={genres} loading={loading} error={error}/>} />
          <Route path="movies/:id" element={<MovieDetails />} />
          <Route path="genre/:name/:id" element={<Genre popularMovies={popularMovies} loading={loading} error={error} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
