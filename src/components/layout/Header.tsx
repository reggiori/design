import { } from 'styled-components/macro'
import { TextField } from 'components'

interface HeaderProps {
  /**
   * Input value
   */
  logo: string;
}

export const Header = ({ logo, ...props }: HeaderProps) => {
  return (
    <header
      css={`
        background: var(--primary-color);
        height: 50px;
        line-height: 50px;
        color: #fff;
        padding: 0 20px;
        display:flex;
        box-shadow: 0 0 5px 0 rgba(0,0,0,.5);
        z-index:5;
      `}
      {...props}
    >
      <div css="flex:1;">
        {logo}
      </div>
      <div css="width:500px;text-align:center;">
        <TextField
          placeholder="Search ..."
          css={`
          background: rgba(255,255,255,.2);
          color: #fff;
          width: calc(100% - 100px);

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
