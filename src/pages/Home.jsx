import { CardContainer } from "../components/home/CardContainer";
import { Navigation } from "../components/Navigation";
import { Loader } from "../components/assets/Loader";
import { Message } from "../components/assets/Message";
import styled from "styled-components";

export const Home = ({ popularMovies, genres, loading, error }) => {

  return (
    <>
      <Navigation genres={genres} />
      <section>
        <StyledTitle>Popular Movies</StyledTitle>
        {loading && <Loader />}
        {error && <Message>Data is unavailable right now. Try again later!</Message>}
        <CardContainer popularMovies={popularMovies} />
      </section>
    </>
  );
};

const StyledTitle = styled.h1`
  text-align: center;
  margin-bottom: 54px;
`;