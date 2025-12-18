import styled from "styled-components";

export const Message = ({ children }) => {

  return (
    <StyledWrapper>
      <p>{children}</p>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 24px;
`;