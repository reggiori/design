import { useEffect } from 'react'
import {} from 'styled-components/macro'

interface HeaderProps {
  /**
   * Input value
   */
  title: string;
}

export const Header = ({ title, ...props }: HeaderProps) => {
  return (
    <header
      css={`
        background: var(--primary-color);
        height: 50px;
        line-height: 50px;
        color: #fff;
        padding: 0 20px;
      `}
      {...props}
    >
      {title}
    </header>
  )
}
