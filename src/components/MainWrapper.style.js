import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 100rem;
  position: relative;
  z-index: 10;
  background-color: #fff;
  margin-top: 3rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${({ theme }) => theme.border};
`;
