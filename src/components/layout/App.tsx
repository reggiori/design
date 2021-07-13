import { Header } from 'components'
import { } from 'styled-components/macro'

export const App = ({ children }: { children: any }) => (
  <div css={`
    height:100vh;
    display:flex;
    flex-direction:column;
    background:#fafafa;
  `}>
    <Header logo="App" />
    <main css="flex:1;display:flex;overflow:hidden;">
      {children}
    </main>
  </div>
)
