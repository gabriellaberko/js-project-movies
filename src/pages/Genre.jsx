import { GenreFilteredCardContainer } from "../components/genre/GenreFilteredCardContainer";
import { MovieButton } from "../components/moviedetails/MovieButton";
import { Loader } from "../components/assets/Loader";
import { useParams } from "react-router-dom";
import { Message } from "../components/assets/Message";
import styled from "styled-components";

export const Genre = ({ popularMovies, loading, error }) => {

  const { name } = useParams();

  return (
    <>
      <MovieButton />
      <section>
        <StyledTitle>{name} Movies</StyledTitle>
        {loading && <Loader />}
        {error && <Message>Data is unavailable right now. Try again later!</Message>}
        <GenreFilteredCardContainer popularMovies={popularMovies} />
      </section>
    </>
  );
};


const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 54px;
`;