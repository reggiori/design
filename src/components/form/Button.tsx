import {} from 'styled-components/macro'

interface ButtonProps {
  /**
   * Button content
   */
  text:string
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button= ({text,...props}: ButtonProps)=>{
  return <button css={`
    border:none;
    background: var(--primary-color);
    color:#fff;
    line-height:2.5em;
    padding:0 1em;
    border-radius:3px;
    text-transform:uppercase;
  `} {...props}>{text}</button>
}
