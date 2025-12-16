import styled from "styled-components";

export const Rating = ({ rating }) => {

  const oneDecimalRating = rating.toFixed(1);

  return (
    <StyledWrapper>
      <StyledStarImage src="../../../star.png" alt="star" />
      <h2>{oneDecimalRating}</h2>
    </StyledWrapper>
  );
}

const StyledStarImage = styled.img`
  height: 32px;
`;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;