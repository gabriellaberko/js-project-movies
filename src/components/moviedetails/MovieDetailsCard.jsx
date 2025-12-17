import { MovieDescription } from "./MovieDescription";
import { Rating } from "./Rating";
import styled from "styled-components";


export const MovieDetailsCards = ({ movieDetails }) => {

  return (
    <StyledWrapper>
      <StyledPoster src={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`} alt={`movie cover of "${movieDetails.title}"`} />
      <MovieDescription title={movieDetails.title} description={movieDetails.overview} rating={movieDetails.vote_average} genres={movieDetails.genres} />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px 50px 50px;
  gap: 20px;


  @media (min-width: ${({ theme }) => theme.breakpoints.tabletMin}) and (max-width: ${({ theme }) => theme.breakpoints.tabletMax}){
    flex-direction: row;
    padding: 50px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    align-items: flex-end;
    gap: 62px;
    padding: 50px;
  }
`;

const StyledPoster = styled.img`
  border: 3px solid white;
  width: 200px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tabletMin})  {
    flex-direction: row;
    width: 250px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet})  {
    flex-direction: row;
    width: 400px;
  }

`;