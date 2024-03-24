import styled from "styled-components";

export const ThirdParty = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  column-gap: 1.2rem;
`;

export const LoginButton = styled.button`
  width: 5.4rem;
  height: 5.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.border};

  img {
    display: block;
  }

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }
`;
