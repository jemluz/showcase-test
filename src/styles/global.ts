import { createGlobalStyle } from 'styled-components'

// z-index list
// 1000 - header
// 900 - nav
// 800 - .crednosso-section

export const GlobalStyle = createGlobalStyle`
  @import url("https://use.typekit.net/amo0ldj.css");
  @import url('https://fonts.googleapis.com/css?family=Khula:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* font-family: t26-carbon, monospace; */
    font-family: 'Khula', sans-serif;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    background: none;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`
