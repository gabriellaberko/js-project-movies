import styled from "styled-components"

const StyledtextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`


export const MovieDescription = ({ title, description }) => {
  return (
    <StyledtextWrapper>
      <h2>{title}</h2>
      <p>{description}</p> 
    </StyledtextWrapper>
  );
}