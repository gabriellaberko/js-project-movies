import { GenreFilteredCardContainer } from "../components/genre/GenreFilteredCardContainer";
import { MovieButton } from "../components/moviedetails/MovieButton";
import { Loader } from "../components/assets/Loader";
import { useParams } from "react-router-dom";

export const Genre = ({ popularMovies, loading, error }) => {

  const { name } = useParams();

  return (
    <section>
      <MovieButton />
      <h1>{name}</h1>
      {loading && <Loader />}
      {error && <p>Data is unavailable right now. Try again later!</p>}
      <GenreFilteredCardContainer popularMovies={popularMovies} />
    </section>
  );
};