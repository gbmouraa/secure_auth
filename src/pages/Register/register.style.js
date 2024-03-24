import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
  width: 100%;
  max-width: 100rem;
  padding: 0 2rem;
  margin: auto;

  @media screen and (min-width: 1020px) {
    padding: 0;
  }

  .main-wrapper-login {
    @media screen and (min-width: 572px) {
      margin-top: 6rem;
    }
  }
`;

export const SignUpWrapper = styled.div`
  width: 100%;
  max-width: 67.8rem;
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
`;

export const AuthOptions = styled.div`
  margin-top: 2rem;
  .sm {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const LoginAnchor = styled(Link)`
  color: ${({ theme }) => theme.blue};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
