import styled from "styled-components";
import { Link } from "react-router-dom";
import { Rating } from "../moviedetails/Rating";

export const MovieOverviewCard = ({ title, image, movieId, releaseDate, rating }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w342${image}`;

  return (
    <StyledWrapper>
      <Link key={title} to={`/movies/${movieId}`}>
        <StyledImg
          src={imgUrl}
          alt={`movie cover of "${title}"`}
        />
        <div className="overlay">
          <div>
            <StyledHeading>{title}</StyledHeading>
            <Rating rating={rating} />
            <p>Released {releaseDate}</p>
          </div>
        </div>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;
  margin: 0;
  position: relative;
  overflow: hidden;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.mobileSmall}) {
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 33.3%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 25%;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.mediumOpacity};
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    align-items: flex-end; /* Puts text at the bottom */
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

const StyledHeading = styled.h2`
  font-size: 40px;
  margin-bottom: 10px;
`;

const StyledImg = styled.img`
  width: 100%;
`;

