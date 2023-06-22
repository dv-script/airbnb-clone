import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  html,
  body {
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
