import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Nunito Sans', sans-serif;
  }
`

export default ({ children }: { children: any }) => {
  return (
    <>
    test
      <GlobalStyle/>
      {children}
    </>
  )
}
