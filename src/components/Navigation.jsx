import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";


export const Navigation = ({ genres }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(prev => !prev);
  };

  return (
    <StyledNav $expanded={expanded}>
      <StyledButton onClick={handleClick}
        aria-expanded={expanded}
        aria-label="Main menu"
        aria-controls="hamMenuList"
        >
        
        <StyledFirstSpan $expanded={expanded} aria-hidden="true"></StyledFirstSpan>
        <StyledSecondSpan $expanded={expanded} aria-hidden="true"></StyledSecondSpan>
        <StyledThirdSpan $expanded={expanded} aria-hidden="true"></StyledThirdSpan>
      </StyledButton>
      <StyledNavigationContent $expanded={expanded}>
      <h3>Movie Genres</h3>
        <StyledList>
          {genres.map((genre) => (
            <StyledLink to={`/genre/${genre.name}/${genre.id}`} key={genre.id}>
              {genre.name}
            </StyledLink>
          ))}
        </StyledList>
      </StyledNavigationContent>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ $expanded, theme }) => $expanded
    ? theme.colors.darkOpacity
    : theme.colors.opacity};
  z-index: 3000;
`;


const StyledSpan = styled.span`
  display: block;
  height: 4px;
  width: 40px;
  background: ${({ theme }) => theme.colors.text};
  margin: 8px 0;
  border-radius: 2px;
  transition: transform 0.4s ease, opacity 0.3s ease;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
`;


const StyledFirstSpan = styled(StyledSpan)`
  transform: ${({ $expanded }) => ($expanded ? "translateY(12px) rotate(45deg)" : "initial")};
`;


const StyledSecondSpan = styled(StyledSpan)`
  opacity: ${({ $expanded }) => ($expanded ? "0" : "initial")};
`;


const StyledThirdSpan = styled(StyledSpan)`
  transform: ${({ $expanded }) => ($expanded ? "translateY(-12px) rotate(-45deg)" : "initial")};
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  gap: 3px;
  margin: 25px 40px;

  &:hover {
    text-decoration: underline;
  }
`;


const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  padding: 12px;
  border: none;
  z-index: 4001;
  position: relative;
`;


const StyledNavigationContent = styled.div`
  position: absolute;
  padding: 0 24px 42px 24px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.darkOpacity};
  align-items: center;
  width: 100vw;
  transition: transform 0.3s ease-in-out, opacity 0.5s ease;
  transform: ${({ $expanded }) =>
    $expanded ? "translateY(0)" : "translateY(-100%)"};
  opacity: ${({ $expanded }) => ($expanded ? "1" : "0")};
  pointer-events: ${({ $expanded }) => ($expanded ? "all" : "none")};
`;


const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0 12px;
  @media (min-width: ${({ theme }) => theme.breakpoints.tabletMin}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;