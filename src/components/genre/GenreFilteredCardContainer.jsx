import { MovieOverviewCard } from "../home/MovieOverviewCard";
import { Message } from "../assets/Message";
import styled from "styled-components";
import { useParams } from "react-router-dom"

export const GenreFilteredCardContainer = ({ popularMovies }) => {

  const { id } = useParams(); //get genre ID from the url
  const genreId = Number(id);

  //TO DO: Fix so that it appears some message when filtered movie is an empty array
  const filteredMovies = popularMovies 
    ? popularMovies.filter(movie => movie.genre_ids.includes(genreId))
    : [];

  return (
    <StyledWrapper>
      {filteredMovies?.length === 0 && (
      <Message>Unfortunately, there are no genres matching your filter.</Message>
      )}
      {filteredMovies.map((movie, index) => (
        <MovieOverviewCard key={index} title={movie.title} image={movie.poster_path} movieId={movie.id} releaseDate={movie.release_date} rating={movie.vote_average}></MovieOverviewCard>
      ))}
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;