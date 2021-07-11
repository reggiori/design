import { useState } from 'react'
import { useEffect } from 'react'
import { JSXElementConstructor, ComponentProps } from 'react'
import { } from 'styled-components/macro'

type OneOnly<Obj, K extends keyof Obj> = { [key in Exclude<keyof Obj, K>]: null } & { [key in K]: Obj[K] };

type ListItemProps<T> = T & {
  onClick: () => void
  selected: boolean
}

interface Props<T extends JSXElementConstructor<ComponentProps<T>>, K extends keyof ComponentProps<T>> {
  component: T
  data: ComponentProps<T>[]
  identifier: keyof OneOnly<ComponentProps<T>, K>
  onChange: (val: K | undefined) => void
}

export function List<T extends JSXElementConstructor<ComponentProps<T>>, K extends keyof ComponentProps<T>>({ data, component: Component, identifier, onChange }: Props<T, K>) {
  const [selected, setSelected] = useState<K>()

  useEffect(() => {
    onChange(selected)
  }, [selected])

  return (
    <ul css={`
    list-style-type:none;
    padding:0;
    margin:0;
    overflow-y:auto;
    flex:1;
    `}>
      {data.map((itemData, index) => <Component key={index} {...itemData} onClick={() => setSelected((itemData as any)[identifier])} />)}
    </ul>
  )
}

export const ListItem = ({ id, title, content, ...props }: ListItemProps<{ id: number, title: string, content: any }>) => {
  return (
    <li {...props} css={`
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


const Test = () => <List
  component={ListItem}
  data={[
    { id: 1, title: 'test', content: 'toast' },
    { id: 2, title: 'test', content: 'toast' },
    { id: 3, title: 'test', content: 'toast' },
  ]}
  identifier="id"
  onChange={val => console.log(val)}
/>
