import {createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: #030f14;
    font-family: 'Sora', sans-serif;

    display: flex ;
    justify-content: center ;
    align-items: center;
  }

  button {
    cursor: pointer;
    border: none;
  }

  input {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: .8rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #33434d;
    border-radius: 1rem;
  }
`;