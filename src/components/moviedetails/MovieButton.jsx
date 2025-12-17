import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledArrow = styled.img`
  height: 3vh;
  width: auto;
  
`
const StyledButtonContainer = styled.div`
   margin: 25px;
   
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  transition: .3s ease;

  &:hover {
    transform: translateY(-20px)
  }

`

export const MovieButton = () => {
  return (
    <StyledButtonContainer>
      <StyledLink to="/"><StyledArrow src="/arrow.png" alt="image of arrow" />Movies</StyledLink>
    </StyledButtonContainer>
  )
}

