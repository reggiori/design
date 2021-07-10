import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List, ListItem } from 'components'
import { } from 'styled-components/macro'
import faker from 'faker'

export default {
  title: 'Data/List',
  component: List,
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = (args) => (
  <div css={`
    max-width:200px;
    border:1px solid var(--border-color);
    max-height:calc(100vh - 2rem);
    height:520px;
    display:flex;
    `}>
    <List {...args} />
  </div>
)

export const Primary = Template.bind({})
Primary.args = {
  data: new Array(50).fill(null).map(() => ({ title: faker.name.findName(), content: faker.lorem.sentence(5, 10) })),
  component: ListItem,
}
