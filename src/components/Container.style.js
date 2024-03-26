import styled from "styled-components";

export const Container = styled.div`
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
    background-image: url("https://firebasestorage.googleapis.com/v0/b/auth-7e2b3.appspot.com/o/image%2Fwaves%2Fwave-top.svg?alt=media&token=14eaaa06-b862-4903-82fe-8ec11f577f12");
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
    background-image: url("https://firebasestorage.googleapis.com/v0/b/auth-7e2b3.appspot.com/o/image%2Fwaves%2Fwave-bottom.svg?alt=media&token=b2ad22b7-dbfd-4b2c-b377-9919cdcb94bc");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: right top;
  }
`;
