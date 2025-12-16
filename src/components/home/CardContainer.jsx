import { MovieOverviewCard } from "./MovieOverviewCard";
import { Loader } from "../assets/Loader";
import styled from "styled-components";

export const CardContainer = ({ popularMovies, loading, error }) => {

  return (
    <StyledWrapper>
      {popularMovies.map((movie, index) => (
        <MovieOverviewCard key={index} title={movie.title} image={movie.poster_path} movieId={movie.id}></MovieOverviewCard>
      ))}
      {loading && <Loader />}
      {error && <p>Data is unavailable right now. Try again later!</p>}
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;