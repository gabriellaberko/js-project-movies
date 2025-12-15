import { Loader } from "../components/Loader";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const MovieDetails = () => {
    const[movieDetails, setMovieDetails] = useState();
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(false);

    const params = useParams();
    const paramsMovieId = params.id;
  
    useEffect(() => {
      const fetchMovieDetails = async () => {
        const APIkey = `269615d5c201f031cd098191b590c560`;

        try{
          const response = await fetch(`https://api.themoviedb.org/3/movie/${paramsMovieId}?api_key=${APIkey}&language=en-US`);
          if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setLoading(false);
          console.log(data);
          setMovieDetails(data);
        }
        catch(error) {
          console.log("Fetch error:", error);
          setError(true);
        }
      };
      fetchMovieDetails();
    },[])
    

  return (
    <div>
      
    </div>
  )
}