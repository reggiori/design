import { useState } from 'react'
import { ComponentProps, JSXElementConstructor } from 'react'
import { } from 'styled-components/macro'

interface ListItemProps{
  onClick:()=>any
}

interface Props<T extends JSXElementConstructor<ComponentProps<T>&ListItemProps>> {
  component: T
  data: ComponentProps<T>[]
  identifier: keyof ComponentProps<T>
}

export function List<T extends JSXElementConstructor<ComponentProps<T>&ListItemProps>>({ data, component: Component, identifier }: Props<T>) {
  const [selected,setSelected] = useState<string>()

  return (
    <ul css={`
    list-style-type:none;
    padding:0;
    margin:0;
    overflow-y:auto;
    flex:1;
    `}>
      {data.map((itemData, index) => <Component key={index} {...itemData} onClick={()=>setSelected(itemData[identifier])} />)}
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
