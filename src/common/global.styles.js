import React from "react";
import { Global, css } from "@emotion/core";
import Bg from "../assets/img/bg.png";
import "normalize.css";
import { colors } from "./common.styles";

export const GlobalStyles = props => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        margin: 0;
        padding: 0;
        position: relative;
        min-height: 100%;
        margin: 0;
        font-family: "Noto Sans JP", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.secondary} url(${Bg});
        color: white;
      }

      a,
      a:active,
      a:hover,
      a:visited {
        color: white;
      }
    `}
  />
);

export default GlobalStyles;
