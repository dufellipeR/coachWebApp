import styled, { css } from 'styled-components';
import { shade } from 'polished';
import codBack from '../../assets/codbackresized2.jpg';
import valorBack from '../../assets/valorantback.jpg';
import backMain from '../../assets/backgroundmain.png';
import highlightsback from '../../assets/reyna.png';
import mw from '../../assets/valorantprice.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #000;
  overflow-y: hidden;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  min-height: 400px;
  background: #000;
  font-size: 18px;
  font-family: valorant;
  overflow: hidden;

  video {
    min-width: 100%;
  }

  nav {
    z-index: 2;
    min-width: 100%;
    padding: 1%;
    position: fixed;
    background: rgba(0.5, 0.5, 0.5, 0.1);
    ul {
      justify-content: space-evenly;
      display: flex;
      max-height: 35px;
      justify-content: flex-end;
      list-style: none;

      li {
        a {
          text-decoration: none;
          color: #fff;
          cursor: pointer;
          margin: 7px;
          transition: color 0.3s;
        }
        hr {
          margin-top: 10%;
          visibility: hidden;
          transition: visibility 0.1s;
        }

        &:hover {
          a {
            color: #f43f4e;
          }

          hr {
            visibility: visible;
          }
        }
      }
    }
  }
`;

export const Intro = styled.section`
  display: flex;
  justify-content: center;

  #imgDiv {
    display: flex;
    align-items: center;
    position: absolute;
    min-width: 80%;
    min-height: 500px;
    background: url(${backMain}) no-repeat center;
    top: 68%;
    z-index: 1;
    transition: 0.3s;

    p {
      visibility: hidden;
      display: flex;
      flex-direction: column;
      margin-left: 37%;
      font-family: valorant;
      transition: 0.3s;
      font-size: 16px;
      &:first-child() {
        font-size: 30px;
      }
    }

    a {
      position: absolute;
      left: 33%;
      transition: 0.4s;

      img {
        transition: 0.4s;
      }
    }
    &:hover {
      p {
        visibility: visible;

        font-size: 19px;
        &:first-child() {
          font-size: 36px;
        }
      }
      img {
        margin-left: 210px;
      }
    }
  }

  #imgCod {
    background: url(${codBack}) no-repeat;
  }

  #imgValor {
    background: url(${valorBack}) no-repeat;
  }
  div {
    min-width: 670px;
    min-height: 695px;
  }
`;

export const Highlights = styled.section`
  background: url(${highlightsback}) no-repeat fixed center;
  padding: 1%;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  min-width: 680px;
  min-height: 1080px;
  align-items: center;
  h1 {
    top: 10%;
    min-height: 5;
    background: #000;
    padding: 2%;
    font-size: 72px;
    font-family: valorant;
  }
`;

export const VideoCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 100%;
  justify-content: space-evenly;
  min-height: 1080px;
`;

export const Prices = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f43f4e;
  /* background: url(${mw}) no-repeat; */
  min-width: 680px;
  min-height: 720px;
  color: #101823;

  h1 {
    font-size: 72px;
    font-family: valorant;
  }

  #listValores {
    margin-top: 2%;
    display: flex;
    justify-content: center;

    min-width: 100%;

    .basicPrice {
      transition: 0.2s;
      &:hover {
        box-shadow: 0 0 10px 0 rgba(120, 135, 182, 0.4);

        padding-bottom: 58px;
        padding-top: 44px;
        margin-top: -18px;
        margin-bottom: -18px;
        z-index: 1;
        border-top: 7px solid #ff843b;
      }
    }

    .maxPrice {
      transition: 0.2s;
      &:hover {
        box-shadow: 0 0 10px 0 rgba(120, 135, 182, 0.4);
        border-top: 7px solid rebeccapurple;
        padding-bottom: 58px;
        padding-top: 44px;
        margin-top: -18px;
        margin-bottom: -18px;
        z-index: 1;
      }
    }

    .cardPrice {
      -webkit-box-flex: 0;
      flex-grow: 0;
      width: calc(50% - 15px);
      max-width: 380px;
      padding: 32px 0 40px;
      background-color: #fff;
      box-shadow: 0 0 10px 0 rgba(120, 135, 182, 0.1);
      border-radius: 1px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      min-height: 450px;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      flex-direction: column;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-flex: 1;
      flex-grow: 1;
      color: #4a535a;

      /* &:hover {
        box-shadow: 0 0 10px 0 rgba(120, 135, 182, 0.4);
        border-top: 7px solid #008fff;
        padding-bottom: 58px;
        padding-top: 44px;
        margin-top: -18px;
        margin-bottom: -18px;
        z-index: 1;
      } */

      img {
        margin-right: 3%;
      }

      .title {
        margin-top: 30px;
      }

      .titleBasic {
        color: #ff843b;
      }
      .titlePremium {
        color: #008fff;
      }
      .titleMax {
        color: rebeccapurple;
      }

      .planos-pagamento__precos {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 100%;
        padding-top: 21px;
        margin-bottom: 5%;

        span {
          display: inline-block;
        }

        .planos-pagamento__preco-parcela {
          display: -webkit-box;
          display: -webkit-flex;
          display: flex;
          -webkit-box-orient: vertical;
          -webkit-box-direction: normal;
          -webkit-box-align: center;
          align-items: center;

          .planos-pagamento__valor-parcela {
            font-size: 34px;
            font-weight: bold;
            line-height: 1;
            letter-spacing: -0.5px;
          }

          .planos-pagamento__numero-parcelas {
            font-size: 15px;
            font-weight: normal;
            line-height: 2;
            letter-spacing: -0.3px;
            margin-bottom: 3px;
          }
        }
        .planos-pagamento__label-vista {
          font-size: 15px;
          font-weight: normal;
          line-height: 1.3;
          letter-spacing: normal;
          color: #4a535a;

          margin-top: 8%;
        }
      }

      a {
        display: inline-block;
        font-size: 15px;
        font-weight: 600;
        line-height: normal;
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
        background-color: #f43f4e;
        padding: 11px 6px;
        margin-top: 16px;
        border-radius: 4px;
      }

      p {
        margin-bottom: 5%;
        font-size: 34px;
        color: #4a535a;
      }

      ul {
        list-style: none;

        li {
          & + li {
            margin-top: 5%;
          }
        }
      }

      .planos-pagamento__label {
        -webkit-box-ordinal-group: 3;
        order: 2;
        width: auto;
        font-size: 14px;
      }

      .planos-pagamento__vantagem {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-pack: start;
        justify-content: flex-start;
        padding-right: 10px;
        height: 37px;
        min-height: 50px;

        .planos-pagamento__wrapper {
          min-width: 104%;
        }
      }
    }

    .premiumPrice {
      box-shadow: 0 0 10px 0 rgba(120, 135, 182, 0.4);
      border-top: 7px solid #008fff;
      padding-bottom: 58px;
      padding-top: 44px;
      margin-top: -18px;
      margin-bottom: -18px;
      z-index: 1;
    }
  }
`;

export const Footer = styled.footer``;
