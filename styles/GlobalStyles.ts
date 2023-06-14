import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
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
