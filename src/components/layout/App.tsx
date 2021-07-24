import { Header } from 'components'
import { } from 'styled-components/macro'
import { Col } from './Flex'

export const App = ({ children }: { children: any }) => (
  <Col css={`
    height:100vh;
    background:#fafafa;
  `}>
    <Header logo="App" />
    <main css="flex:1;display:flex;overflow:hidden;">
      {children}
    </main>
  </Col>
)
