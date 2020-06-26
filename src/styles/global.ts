import { createGlobalStyle } from 'styled-components';
import valorant from '../assets/valorant.ttf';

export default createGlobalStyle`
   @font-face {
    font-family: valorant;
    font-style: normal;
    font-weight: 400;
    src: url(${valorant});
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }

    body {
      color: #fff;
      -webkit-font-smoothing: antialiased;
    }

    body, input, button {
      font: 16px Roboto,sans-serif;
    }

    /* Centraliza o conteudo */
    /* #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    } */

    button {
      cursor: pointer
    }
`;
