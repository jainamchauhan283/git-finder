import { createGlobalStyle } from "styled-components";
import { withTheme } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.2s ease;
  }

  html {
    background-color: ${(props) => props.theme.body};
  }

  svg, path {
    transition: none;
  }
`;

export default withTheme(GlobalStyles);
