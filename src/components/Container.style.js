import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 2560px;
  min-height: 100vh;
  position: relative;
  margin: auto;
  padding-bottom: 18rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 20.2rem;
    background-image: url("./src/assets/wave-top.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;

    @media screen and (min-width: 570px) {
      height: 70%;
      transform: translateY(-26%);
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-image: url("./src/assets/wave-bottom.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;
  }
`;
