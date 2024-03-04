import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;

  p {
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

export const AuthOptions = styled.div`
  margin-top: 2rem;
  p {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const LoginAnchor = styled.button`
  color: ${({ theme }) => theme.blue};

  &:hover {
    text-decoration: underline;
  }
`;

export const SocialLogin = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  column-gap: 1.2rem;
`;

export const LoginButton = styled.button`
  width: 6.4rem;
  height: 6.4rem;
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
