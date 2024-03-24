import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 60px;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 100rem;
  padding: 0 2rem;

  @media screen and (min-width: 1020px) {
    padding: 0;
  }
`;

export const Social = styled.ul`
  list-style-type: none;
  display: flex;
  column-gap: 16px;

  li {
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
    }

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
  }
`;
