import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsCards } from "../components/moviedetails/MovieDetailsCard";
import { Loader } from "../components/assets/Loader";
import { Message } from "../components/assets/Message";
import styled from "styled-components";
import { MovieButton } from "../components/moviedetails/MovieButton";


export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id: paramsMovieId } = useParams(); //get movie ID from the url

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const APIkey = `269615d5c201f031cd098191b590c560`;

      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${paramsMovieId}?api_key=${APIkey}&language=en-US`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLoading(false);
        console.log(data);
        setMovieDetails(data);
      }
      catch (error) {
        console.log("Fetch error:", error);
        setLoading(false);
        setError(true);
      }
    };
    fetchMovieDetails();
  }, []);
  

  return (
    <StyledSection 
      $bgImage={movieDetails?.backdrop_path
      ? `https://image.tmdb.org/t/p/w1280/${movieDetails.backdrop_path}`
      : undefined}   
      >
      <MovieButton />
      {loading && <Loader />}
      {error && <Message>Data is unavailable right now. Try again later!</Message>}
      {movieDetails && <MovieDetailsCards movieDetails={movieDetails} />}
    </StyledSection>
  );
};


const StyledSection = styled.section`
  background-image: 
    linear-gradient(
     ${({ theme }) => theme.colors.opacity},
     ${({ theme }) => theme.colors.opacity}
    ),
    ${({ $bgImage }) =>
    $bgImage
      ? `url(${$bgImage})`
      : "none"};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    
  }
`;
