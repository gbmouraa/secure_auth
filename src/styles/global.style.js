import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html{
    font-size: 62.5%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
  }

  body{
    width: 100%;
    min-height:100vh;
    font-size: 1.6rem;
    overflow-x: hidden;
  }

  button{
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 1.6rem;
  }

`;
