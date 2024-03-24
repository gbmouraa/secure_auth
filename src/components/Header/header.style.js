import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100rem;
  padding: 3rem 2rem 0 2rem;
  margin: auto;

  @media screen and (min-width: 570px) {
    padding-top: 5rem;
  }

  @media screen and (min-width: 1020px) {
    padding: 5rem 0 0;
  }
`;

export const ActionButton = styled.button`
  font-size: 1.6rem;

  div {
    width: 0px;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.text};
    transition: all 0.4s ease;
  }

  &:hover {
    div {
      width: 100%;
    }
  }
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 800;
`;
