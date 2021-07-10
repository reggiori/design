import { ComponentProps, JSXElementConstructor } from 'react'
import { } from 'styled-components/macro'

interface Props<T extends JSXElementConstructor<any>> {
  component: T
  data: ComponentProps<T>[]
  identifier: keyof ComponentProps<T>
}

export function List<T extends JSXElementConstructor<any>>({ data, component: Component }: Props<T>) {
  return (
    <ul css={`
    list-style-type:none;
    padding:0;
    margin:0;
    overflow-y:auto;
    flex:1;
    `}>
      {data.map((itemData, index) => <Component key={index} {...itemData} />)}
    </ul>
  )
}

export const ListItem = ({title, content }: { id:string, title: string, content: any }) => {
  return (
    <li css={`
    border-bottom:1px solid var(--border-color);
    padding:8px;

    &>div{
      white-space:nowrap;
      overflow:hidden;
      text-overflow:ellipsis;
    }

    &:last-child{
      border-bottom:none;
    }
    `}>
      <div css="font-weight:bold;">{title}</div>
      <div>{content}</div>
    </li>
  )
}


//const Test = ()=> <List
//  component={ListItem}
//  data={[
//    {id:'123',title:'test', content:'toast'},
//    {id:'123',title:'test', content:'toast'},
//    {id:'123',title:'test', content:'toast'},
//  ]}
//  identifier="title"
///>
