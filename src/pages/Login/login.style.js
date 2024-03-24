import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 2rem;
  text-align: center;
  p {
    font-size: 2.4rem;
    font-weight: 600;
  }

  span {
    color: ${({ theme }) => theme.blue};
    margin-top: 3rem;
  }
`;
