import styled from "styled-components";
import { Link } from "react-router-dom";

export const MovieOverviewCard = ({ title, image, movieId }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w342${image}`;

  return (
    <StyledWrapper>
      <Link key={title} to={`/movies/${movieId}`}>
        <StyledImg src={imgUrl} alt={title} />
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;

  @media(min-width: 370px) {
    width: 50%;
  }
  @media(min-width: 570px) {
    width: 33.3%;
  }
  @media(min-width: 820px) {
    width: 25%;
  }
  
  &:hover {

  }

`;

const StyledImg = styled.img`
  width: 100%;
`;

