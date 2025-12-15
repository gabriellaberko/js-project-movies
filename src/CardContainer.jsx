import React, { useState, useEffect } from "react";
import { MovieCard } from "./components/MovieCard";
import { Loader } from "./components/Loader";

export const CardContainer = () => {

  const[popularMovies, setPopularMovies] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const APIkey = `269615d5c201f031cd098191b590c560`;
      try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`);
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        setPopularMovies(data.results);
      }
      catch(error) {
        console.log("Fetch error:", error);
        setError(true);
      }
    };
    fetchData();
  },[])
  

  return (
    <div>
      {popularMovies.map((movie, index) => (
        <MovieCard key={index} title={movie.title}></MovieCard>
      ))}
      {loading && <Loader />}
      {error && <p>Data is unavailable right now. Try again later!</p>}
    </div>
  );
}