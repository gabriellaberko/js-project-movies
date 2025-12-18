import styled from "styled-components"
import { Rating } from "./Rating";


export const MovieDescription = ({ title, description, rating, genres }) => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledHeading>{title}</StyledHeading>
        <Rating rating={rating} />
      </StyledTitleWrapper>
      <StyledDescriptionWrapper>
        <StyledGenreWrapper>
          {genres.map((genre) => (
            <StyledParagraph key={genre.name}>{genre.name}</StyledParagraph>
          ))}
        </StyledGenreWrapper>
        <p>{description}</p>
      </StyledDescriptionWrapper>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: left;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 24px;

   @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
    gap: 24px;
    align-items: center;
  }
`;
const StyledGenreWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const StyledParagraph = styled.div`
  outline: 2px solid ${({ theme }) => theme.colors.text};
  padding: 4px;
`;

const StyledDescriptionWrapper = styled.div`
  max-width: 400px;
`

const StyledHeading = styled.h1`
  margin: 0;
`