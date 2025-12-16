import { MovieDescription } from "./MovieDescription";
import { Rating } from "./Rating";

export const MovieDetailsCards = ({ movieDetails }) => {
  return (
    <div>
      <MovieDescription title={movieDetails.title} description={movieDetails.overview}/>
    </div>
  );
}