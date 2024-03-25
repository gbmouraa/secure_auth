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

  .loader{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.6rem;


    .loader-box{
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 50rem;
      border-radius: 1.6rem;
      padding: 8rem 0;
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
     -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    }
  }

`;
