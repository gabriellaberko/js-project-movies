import { CardContainer } from "../components/Home/CardContainer";
import { Navigation } from "../components/Navigation";
import { Loader } from "../components/assets/Loader";

export const Home = ({ popularMovies, genres, loading, error }) => {

  return (
    <>
      <Navigation genres={genres} />
      <h1>Movies</h1>
      {loading && <Loader />}
      {error && <p>Data is unavailable right now. Try again later!</p>}
      <CardContainer popularMovies={popularMovies} />
    </>
  );
};
