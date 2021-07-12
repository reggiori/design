import { useState, useEffect, InputHTMLAttributes } from 'react'
import { } from 'styled-components/macro'

interface TextFieldProps {
  /**
   * Input type
   */
  type?: 'text' | 'email' | 'number'
  /**
   * Input value
   */
  value?: string
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export const TextField = ({ value, type = 'text', ...props }: TextFieldProps & Omit<InputHTMLAttributes<any>, 'css'>) => {
  const [val, setVal] = useState(value)

  useEffect(() => {
    setVal(value)
  }, [value])

  return <input type={type} css={`
    border:none;
    background: #0000000a;
    line-height:2.5em;
    padding:0 1em;
    border-radius:3px;
    box-sizing:border-box;
  `}
    value={val}
    onChange={ev => setVal(ev.target.value)}
    {...props} />
}
