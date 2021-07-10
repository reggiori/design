import {} from 'styled-components/macro'

interface TextFieldProps {
  /**
   * Button content
   */
  text:any
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const Button= ({text,...props}: TextFieldProps)=>{
  return <button css={`
    border:none;
    background: linear-gradient(to right, #4776e6, #8e54e9);
    color:#fff;
    line-height:2.5em;
    padding:0 1em;
    border-radius:3px;
    text-transform:uppercase;
  `} {...props}>{text}</button>
}
