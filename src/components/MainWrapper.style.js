import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 100rem;
  position: relative;
  z-index: 10;
  background-color: #fff;
  margin: 3rem auto 0rem auto;
  border-radius: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.border};
`;
