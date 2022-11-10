import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 500px) {
    html {
      font-size: 70%;
      width: 450px;
      height: 100%;
      margin: 0 auto;
      border: 1px solid lightgray;
    }
  }

  @media (max-width: 500px) {
    html {
      font-size: 62.5%;
      margin: 0 auto;
      height: 100%;
    }
  }

  #root {
    text-align: center;
    padding: 2.4rem;
    height: 100vh;
    background: #181924;
  }
`;
