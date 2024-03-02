import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 2560px;
  min-height: 100vh;
  position: relative;
  margin: auto;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("./src/assets/wave-top.svg");
    background-size: contain;
    background-repeat: no-repeat;

    @media screen and (min-width: 1800px) {
      transform: translateY(-26%);
    }
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background-image: url("./src/assets/wave-bottom.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right bottom;
  }
`;
