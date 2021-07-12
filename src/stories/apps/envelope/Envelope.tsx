import { ComponentStory, ComponentMeta } from '@storybook/react'
import { App } from 'components/layout/App'
import { List, ListItem, ListItemProps, Icon } from 'components'
import { } from 'styled-components/macro'
import faker from 'faker'

const sampleData = new Array(50).fill(null).map((_, index) => ({ id: index, title: faker.name.findName(), content: faker.lorem.sentence(6, 15) }))


export default {
  title: 'Apps/Envelope',
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<any>


const Template: ComponentStory<any> = (args) => (
  <App>
    <List
      identifier="id"
      component={({ name, icon, onClick, selected }: ListItemProps<{ id: string, name: string, icon: string }>) => <li onClick={onClick} style={{ background: selected ? '#fff' : 'none' }} css={`
        line-height:3em;
        //border-bottom:1px solid var(--border-color);
        padding:0 10px;
      `}><Icon name={icon} css={`
        position:relative;
        top:-2px;
        font-size:18px;
        vertical-align:middle;
        margin-right:10px;
      `} />{name}</li>}
      data={[
        { id: 'inbox', name: 'INBOX', icon: 'inbox' },
        { id: 'sent', name: 'Sent', icon: 'send' },
        { id: 'drafts', name: 'Drafts', icon: 'drafts' },
        { id: 'spam', name: 'Spam', icon: 'warning' },
        { id: 'trash', name: 'Trash', icon: 'delete' },
        { id: 'archive', name: 'Archive', icon: 'archive' },
      ]}
      css={`
        width:120px;
        border-right:1px solid var(--border-color)
      `}
    />
    <List
      css="width:180px"
      component={ListItem}
      data={sampleData}
      identifier="id"
    />
    <iframe css="flex:1;" frameBorder="none" src="https://example.com/" />
  </App>
)

export const Light = Template.bind({})
