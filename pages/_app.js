import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --background-secondary: #F1F9FE;
    --background: #D9E6F6;
    --primaryText: #2E7BB4;
    --secondaryText: #388BB0;
    --tertiaryText: #2F4A71;
    --primaryElement: #6F92BB;
    --anotherElement: #5579A1;
    --gray1: #333333;
    --gray2: #5A5A5A;
    --gray3: #999999;
    --gray4: #C5C6CA;
    --gray5: #F4F4F4;
  }

  body {
    font-family: sans-serif;
    background-color: var(--background);
  }
  #_next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
