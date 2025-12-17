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
  align-items: flex-end;
  padding: 50px;
  gap: 62px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const StyledPoster = styled.img`
  border: 3px solid white;
`;