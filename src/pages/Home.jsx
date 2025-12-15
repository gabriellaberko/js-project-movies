import { useState, useEffect } from "react";
import { CardContainer } from "../components/CardContainer"
import { Loader } from "../components/Loader";

export const Home = () => {

  const[popularMovies, setPopularMovies] = useState([]);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(false);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const APIkey = `269615d5c201f031cd098191b590c560`;
      try{
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=1`);
        if(!response.ok){
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        console.log(data.results);
        setPopularMovies(data.results);
      }
      catch(error) {
        console.log("Fetch error:", error);
        setError(true);
      }
    };
    fetchPopularMovies();
  },[])
  
  return (
    <>
      <h1>Movies</h1>
      <CardContainer popularMovies={popularMovies} loading={loading} error={error}/>
    </>
  )
}
