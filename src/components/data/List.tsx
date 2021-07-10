import {ComponentProps, JSXElementConstructor} from 'react'
import {}from 'styled-components/macro'

interface Props<T extends JSXElementConstructor<any>> {
  component: T
  data: ComponentProps<T>[]
}

export function List<T extends JSXElementConstructor<any>>({data,component:Component}:Props<T>){
  return (
    <ul css={`
    list-style-type:none;
    padding:0;
    margin:0;
    `}>
      {data.map((itemData, index)=><Component key={index} {...itemData} />)}
    </ul>
  )
}

export const ListItem = ({title,content}:{title:string, content:any})=>{
  return (
    <li css={`
    border-bottom:1px solid #000;
    `}>
      <b>{title}</b>
      <p>{content}</p>
    </li>
  )
}
