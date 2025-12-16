import styled from "styled-components"
import { Rating } from "./Rating";


export const MovieDescription = ({ title, description, rating, genres }) => {
  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <h1>{title}</h1>
        <Rating rating={rating} />
      </StyledTitleWrapper>
      <StyledDescriptionWrapper>
        <StyledGenreWrapper>
          {genres.map((genre) =>(
            <StyledParagraph>{genre.name}</StyledParagraph>
          ))}
        </StyledGenreWrapper>
        <p>{description}</p> 
      </StyledDescriptionWrapper>
    </StyledWrapper>
  );
}


const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
`;
const StyledGenreWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
`;

const StyledParagraph = styled.div`
  outline: 2px solid white;
  padding: 4px;
`;

const StyledDescriptionWrapper = styled.div`
  max-width: 400px;
`