import { } from 'styled-components/macro'
import { TextField } from 'components'

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
        display:flex;
      `}
      {...props}
    >
      <div css="flex:1;">
        {title}
      </div>
      <div css="flex:1;text-align:center;">
        <TextField
          placeholder="Search ..."
          css={`
          background:rgba(255,255,255,.2);
          color:#fff;
          width:calc(100% - 100px);

          &::placeholder {
            color: #fff;
            opacity: .75;
          }
        `} />
      </div>
      <div css="flex:1;"></div>
    </header>
  )
}
