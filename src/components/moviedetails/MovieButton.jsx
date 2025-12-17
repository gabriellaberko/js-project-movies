import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledArrow = styled.img`
  height: 3vh;
  width: auto;


  
`
const StyledText = styled.div`
margin: 3px;
transition: .3s ease;

   &:hover {
    transform: translateX(5px)
  }
 
   
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
   flex-direction: row;
   gap: 3px;
  margin: 25px 40px;
 
`

export const MovieButton = () => {
  return (
    <StyledLink to="/"><StyledArrow src="/arrow.png" alt="image of arrow" /><StyledText>Movies</StyledText></StyledLink>
  )
}

