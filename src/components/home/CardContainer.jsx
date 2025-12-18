import { MovieOverviewCard } from "./MovieOverviewCard";
import styled from "styled-components";

export const CardContainer = ({ popularMovies }) => {

  return (
    <StyledWrapper>
      {popularMovies.map((movie, index) => (
        <MovieOverviewCard key={index} title={movie.title} image={movie.poster_path} movieId={movie.id} releaseDate={movie.release_date} rating={movie.vote_average}></MovieOverviewCard>
      ))}
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;