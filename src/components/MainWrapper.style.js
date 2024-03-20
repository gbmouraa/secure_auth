import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 100rem;
  position: relative;
  z-index: 10;
  background-color: #fff;
  margin-top: 3rem;
  border-radius: 1.6rem;
  border: 0.1rem solid ${({ theme }) => theme.border};

  /* background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 4rem 3.2rem; */
`;
