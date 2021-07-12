import { FC, createElement, useState, useEffect } from 'react'
import { } from 'styled-components/macro'

type OneOnly<Obj, K extends keyof Obj> = { [key in Exclude<keyof Obj, K>]: null } & { [key in K]: Obj[K] };

export type ListItemProps<T> = T & {
  onClick: () => void
  selected: boolean
}

interface Props<D, T extends FC<ListItemProps<D>>, K extends keyof D> {
  component: T
  data: D[]
  identifier: keyof OneOnly<D, K>
  onChange?: (val: D[K] | undefined) => void
}

export function List<D extends Record<string, any>, T extends FC<ListItemProps<D>>, K extends keyof D>({ data, component, identifier, onChange, ...props }: Props<D, T, K>) {
  const [selected, setSelected] = useState<D[K]>()

  useEffect(() => { if (onChange) { onChange(selected) } }, [selected])

  return (
    <ul css={`
    list-style-type:none;
    padding:0;
    margin:0;
    overflow-y:auto;
    `} {...props}>
      {data.map((itemData, index) => createElement(component, { key: index, ...itemData, selected: itemData[identifier] === selected, onClick: () => setSelected(itemData[identifier] as D[K]) }))}
    </ul>
  )
}

export const ListItem = ({ title, content, selected, onClick }: ListItemProps<{ id: number, title: string, content: string }>) => {
  return (
    <li style={{ background: selected ? '#fff' : 'none' }} onClick={onClick} css={`
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
