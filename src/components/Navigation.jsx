import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = ({ genres }) => {

  return (
      <nav>
        <ul>
          {genres.map((genre) => (
          <StyledLink to={`/genre/${genre.name}/${genre.id}`} key={genre.id}>{genre.name}</StyledLink>
          ))}
        </ul>
      </nav>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: row;
  gap: 3px;
  margin: 25px 40px;
`;