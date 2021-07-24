import { FC } from 'react'
import { } from 'styled-components/macro'

export const Container: FC<{ flex?: number }> = ({ children, flex = 1, ...props }) => {
  return <div css={{ flex, display: 'flex' }} {...props}>{children}</div>
}

export const Row: FC = ({ children, ...props }) => {
  return <Container css="flex-direction:row;">{children}</Container>
}

export const Col: FC = ({ children, ...props }) => {
  return <Container css="flex-direction:column;">{children}</Container>
}
