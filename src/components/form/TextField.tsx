
interface TextFieldProps {
  /**
   * test
   */
  value:string
  /**
   * Optional click handler
   */
     onClick?: () => void;
}

export const TextField= ({...props}: TextFieldProps)=>{
  return <input {...props}/>
}
